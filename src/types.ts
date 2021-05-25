export type PackageName = "fei-protocol";

export type EthereumAddress = string;

export type EthereumABI = Record<any, any>; // TODO

export type PackageABISource = "etherscan";

export type PackageABIGetter = (
  address: EthereumAddress,
  settings: Settings
) => Promise<EthereumABI>;

export type PackageConfig = {
  contracts: {
    [k: string]: {
      address: string;
      source: PackageABISource;
    };
  };
};

export type Settings = {
  sourcesEnabled: {
    [k in PackageABISource]: boolean;
  };
  etherscan: {
    apiKey: string;
  };
};
