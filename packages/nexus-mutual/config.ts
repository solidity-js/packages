import axios from "axios";
import {
  EthereumABI,
  EthereumAddress,
  PackageConfig,
  Settings,
} from "../../src/types";

const NEXUS_MUTUAL_API_URL =
  "https://api.nexusmutual.io/version-data/data.json";

type NexusMutualApiABI = {
  address: EthereumAddress;
  code: string;
  smartContractCode: string;
  contractName: string;
  contractAbi: string;
};

const nexusMutualGetter = (abi: NexusMutualApiABI) => {
  const getter = async (_address: EthereumAddress, _settings: Settings) =>
    JSON.parse(abi.contractAbi);

  getter.toString = () => `api.nexusmutual.io`;

  return getter;
};

export default async function getConfig(): Promise<PackageConfig> {
  const { data } = await axios.get(NEXUS_MUTUAL_API_URL);

  const config: PackageConfig = {
    projectName: "",
    projectUrl: "",
    contracts: {},
  };

  if (!data.mainnet) {
    throw new Error("Couldn't find mainnet information at api.nexusmutual.io");
  }

  for (const i in data.mainnet.abis) {
    const c = data.mainnet.abis[i];

    config.contracts[c.contractName] = {
      address: c.address,
      source: nexusMutualGetter(c),
    };
  }

  return config;
}
