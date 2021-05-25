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

    const abi = await getter(address, settings);

    const contract = {
      contractName,
      address,
      abi: JSON.stringify(abi),
    };

    contracts.push(contract);
  }

  const packageVersion = "1.0.0"; // TODO

  compileTemplate(packageName, "index.js", { contracts });
  compileTemplate(packageName, "package.json", { packageName, packageVersion });
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
