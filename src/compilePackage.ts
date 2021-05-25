import path from "path";
import fs from "fs";

import paths from "./paths";
import {
  Settings,
  PackageABISource,
  PackageABIGetter,
  PackageConfig,
  PackageName,
} from "./types";
import etherscan from "./sources/etherscan";

const sources: Record<PackageABISource, PackageABIGetter> = {
  etherscan,
};

export const compile = async (config: PackageConfig, settings: Settings) => {
  const contractNames = Object.keys(config.contracts);

  contractNames.forEach(async (contractName) => {
    const source: PackageABISource = config.contracts[contractName].source;

    if (!sources[source]) {
      throw new Error(`Unknown ABI source '${source}'.`);
    }

    if (!settings.sourcesEnabled[source]) {
      return;
    }

    const getter = sources[source];

    const abi = await getter(config.contracts[contractName].address, settings);
  });
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

  await compile(config, settings);
}
