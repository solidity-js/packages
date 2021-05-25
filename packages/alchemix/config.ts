import { PackageConfig } from "../../src/types";

const config: PackageConfig = {
  projectName: "Alchemix",
  projectUrl: "https://alchemix.fi/",
  contracts: {
    ALCX: {
      address: "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
      source: "etherscan",
    },
    AlUSD: {
      address: "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
      source: "etherscan",
    },
    Alchemist: {
      address: "0xc21D353FF4ee73C572425697f4F5aaD2109fe35b",
      source: "etherscan",
    },
    Transmuter: {
      address: "0xaB7A49B971AFdc7Ee26255038C82b4006D122086",
      source: "etherscan",
    },
    YearnVaultAdapter: {
      address: "0x014dE182c147f8663589d77eAdB109Bf86958f13",
      source: "etherscan",
    },
    StakingPools: {
      address: "0xAB8e74017a8Cc7c15FFcCd726603790d26d7DeCa",
      source: "etherscan",
    },
    TimeToken: {
      address: "0x869d1b8610c038A6C4F37bD757135d4C29ae8917",
      source: "etherscan",
    },
    MultiSigWalletWithTimeLock: {
      address: "0x8392F6669292fA56123F71949B52d883aE57e225",
      source: "etherscan",
    },
    TransmuterB: {
      address: "0xf3cFfaEEa177Db444b68FB6f033d4a82f6D8C82d",
      source: "etherscan",
    },
    TransmuterVaultAdapter: {
      address: "0x491EAFC47D019B44e13Ef7cC649bbA51E15C61d7",
      source: "etherscan",
    },
    SLPToken: {
      address: "0xc3f279090a47e80990fe3a9c30d24cb117ef91a8",
      source: "etherscan",
    },
    CurveLP: {
      address: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
      source: "etherscan",
    },
  },
};

export default config;
