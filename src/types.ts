export type PackageName =
  | "alchemix"
  | "nexus-mutual"
  | "sablier"
  | "compound"
  | "fei-protocol";

export type EthereumAddress = string;

export type EthereumABI = Record<any, any>; // TODO

export type PackageABISource = "etherscan" | PackageABIGetter;

export type PackageABIGetter = (
  address: EthereumAddress,
  settings: Settings
) => Promise<EthereumABI>;

export type PackageConfig = {
  contracts: {
    [k: string]: {
      address: EthereumAddress;
      source: PackageABISource;
    };
  };
  projectName: string;
  projectUrl: string;
};

export type Contract = {
  contractName: string;
  address: EthereumAddress;
  abi: string;
};

export type TemplateName = "index.js" | "package.json" | "README.md";

export type Settings = {
  verbose: boolean;
  sourcesEnabled: {
    [k in Exclude<PackageABISource, PackageABIGetter>]: boolean;
  };
  etherscan: {
    apiKey: string;
  };
};
