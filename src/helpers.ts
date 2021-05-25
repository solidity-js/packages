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
