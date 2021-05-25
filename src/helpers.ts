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

export const bumpVersionNumberFromPackageJson = (path: string) => {
  const existingPackageJson: { version: string } = require(path);
  const matches = existingPackageJson.version.match(/\.(\d+)$/);

  if (!matches) {
    return existingPackageJson.version;
  }

  return existingPackageJson.version.replace(
    /\.(\d+)$/,
    `.${Number(matches[1]) + 1}`
  );
};
