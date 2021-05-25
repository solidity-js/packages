import path from "path";
import fs from "fs";

import paths from "./paths";
import {
  Settings,
  PackageABISource,
  PackageABIGetter,
  PackageConfig,
  PackageName,
  Contract,
} from "./types";
import etherscan from "./sources/etherscan";
import { compile as compileTemplate } from "./template";
import {
  bumpVersionNumberFromPackageJson,
  cliHasToggle,
  readVersionNumberFromPackageJson,
} from "./helpers";

const sources: Record<
  Exclude<PackageABISource, PackageABIGetter>,
  PackageABIGetter
> = {
  etherscan,
};

export const compile = async (
  packageName: PackageName,
  config: PackageConfig,
  settings: Settings
) => {
  if (settings.verbose) {
    console.log(`Building ${packageName}`);
  }

  // index.js

  const contracts: Contract[] = [];
  for (const contractName in config.contracts) {
    const source: PackageABISource = config.contracts[contractName].source;

    let getter = source;
    if (typeof source === "string") {
      if (!sources[source]) {
        throw new Error(`Unknown ABI source '${source}'.`);
      }

      if (!settings.sourcesEnabled[source]) {
        continue;
      }

      getter = sources[source];
    }

    const address = config.contracts[contractName].address;

    if (settings.verbose) {
      console.log(`Fetch ${contractName} at ${address} from ${source}`);
    }

    const abi = await (getter as PackageABIGetter)(address, settings);

    const contract = {
      contractName,
      address,
      abi: JSON.stringify(abi),
    };

    contracts.push(contract);
  }

  if (settings.verbose) {
    console.log(`Writing ${packageName}/index.js`);
  }
  compileTemplate(packageName, "index.js", { contracts });

  // package.json

  if (settings.verbose) {
    console.log(`Writing ${packageName}/package.json`);
  }

  const packageJsonPath = path.join(
    paths.packages,
    packageName,
    "package.json"
  );

  let packageVersion = "0.0.1";
  if (fs.existsSync(packageJsonPath)) {
    packageVersion = readVersionNumberFromPackageJson(packageJsonPath);
  }
  if (!cliHasToggle("no-version-bump")) {
    packageVersion = bumpVersionNumberFromPackageJson(packageJsonPath);
  }

  compileTemplate(packageName, "package.json", { packageName, packageVersion });

  // README.md

  if (settings.verbose) {
    console.log(`Writing ${packageName}/README.md`);
  }

  compileTemplate(
    packageName,
    "README.md",
    {
      contracts,
      packageName,
      packageVersion,
      projectName: config.projectName,
      projectUrl: config.projectUrl,
    },
    { prettier: false }
  );
};

export default async function compilePackage(
  packageName: PackageName,
  settings: Settings
) {
  const packageConfigTsPath = path.join(
    paths.packages,
    packageName,
    "config.ts"
  );

  if (!fs.existsSync(packageConfigTsPath)) {
    throw new Error(
      `Unknown package '${packageName}'. Couldn't find packages/${packageName}/config.ts`
    );
  }

  const config = require(packageConfigTsPath).default;

  if (
    !config ||
    (!Object.keys(config.contracts || {}).length &&
      typeof config !== "function")
  ) {
    throw new Error(
      `Invalid package '${packageName}'. Please ensure there exists a config.ts file with a valid default export.`
    );
  }

  let processedConfig = config;
  if (typeof config === "function") {
    processedConfig = (await config()) as PackageConfig;
  }

  await compile(packageName, processedConfig, settings);
}
