import { PackageConfig } from "../../src/types";

const config: PackageConfig = {
  projectName: "Sablier",
  projectUrl: "https://sablier.finance/",
  contracts: {
    Sablier: {
      address: "0xA4fc358455Febe425536fd1878bE67FfDBDEC59a",
      source: "etherscan",
    },
  },
};

export default config;
