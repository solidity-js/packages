import { argv } from "process";
import { CliToggle } from "./types";

export { default as etherscan } from "./sources/etherscan";

export const manyFrom = async (
  addresses: { [key: string]: string },
  source: (address: string) => Promise<string>
) => {
  const abis: Record<string, string> = {};
  for (const key in addresses) {
    abis[key] = await source(addresses[key]);
  }
  return abis;
};

export const readVersionNumberFromPackageJson = (path: string) => {
  const existingPackageJson: { version: string } = require(path);
  return existingPackageJson.version;
};

export const bumpVersionNumberFromPackageJson = (path: string) => {
  const currentVersion = readVersionNumberFromPackageJson(path);
  const matches = currentVersion.match(/\.(\d+)$/);

  if (!matches) {
    return currentVersion;
  }

  return currentVersion.replace(/\.(\d+)$/, `.${Number(matches[1]) + 1}`);
};

export const cliHasToggle = (toggle: CliToggle) =>
  process.argv.find((a) => a === `--${toggle}`) !== undefined;
