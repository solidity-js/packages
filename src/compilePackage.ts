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

const sources: Record<PackageABISource, PackageABIGetter> = {
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

  const contracts: Contract[] = [];
  for (const contractName in config.contracts) {
    const source: PackageABISource = config.contracts[contractName].source;

    if (!sources[source]) {
      throw new Error(`Unknown ABI source '${source}'.`);
    }

    if (!settings.sourcesEnabled[source]) {
      continue;
    }

    const getter = sources[source];

    const address = config.contracts[contractName].address;

    if (settings.verbose) {
      console.log(`Fetch ${contractName} at ${address} from ${source}`);
    }

    const abi = await getter(address, settings);

    const contract = {
      contractName,
      address,
      abi: JSON.stringify(abi),
    };

    contracts.push(contract);
  }

  const packageVersion = "1.0.0"; // TODO

  if (settings.verbose) {
    console.log(`Writing ${packageName}/index.js`);
  }

  compileTemplate(packageName, "index.js", { contracts });

  if (settings.verbose) {
    console.log(`Writing ${packageName}/package.json`);
  }

  compileTemplate(packageName, "package.json", { packageName, packageVersion });

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

  if (!config || !Object.keys(config.contracts || {}).length) {
    throw new Error(
      `Invalid package '${packageName}'. Please ensure there exists a config.ts file with a valid default export and at least one contract.`
    );
  }

  await compile(packageName, config, settings);
}
