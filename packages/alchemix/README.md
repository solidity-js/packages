# @solidity-js/alchemix

Smart contract ABIs for [Alchemix](https://alchemix.fi/), packaged by [SolidityJS](https://github.com/solidity-js).

## Usage

**Always remember to install a _specific_ package version.**

    $ npm install @solidity-js/alchemix@1.0.0

    // or

    $ yarn add @solidity-js/alchemix@1.0.0

Load in JS/TS:

    import { ContractName } from "@solidity-js/alchemix";

    // or

    const { ContractName } = require("@solidity-js/alchemix");

Then use with ethers.js:

    new ethers.Contract(ContractName.address, ContractName.abi)

Or web3.js:

    new web3.eth.Contract(ContractName.abi, ContractName.address)


## Available contracts

| Name | Address |
| ---- | ------- |
| `ALCX` | [0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF](https://etherscan.com/address/0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF) |
| `AlUSD` | [0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9](https://etherscan.com/address/0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9) |
| `Alchemist` | [0xc21D353FF4ee73C572425697f4F5aaD2109fe35b](https://etherscan.com/address/0xc21D353FF4ee73C572425697f4F5aaD2109fe35b) |
| `Transmuter` | [0xaB7A49B971AFdc7Ee26255038C82b4006D122086](https://etherscan.com/address/0xaB7A49B971AFdc7Ee26255038C82b4006D122086) |
| `YearnVaultAdapter` | [0x014dE182c147f8663589d77eAdB109Bf86958f13](https://etherscan.com/address/0x014dE182c147f8663589d77eAdB109Bf86958f13) |
| `StakingPools` | [0xAB8e74017a8Cc7c15FFcCd726603790d26d7DeCa](https://etherscan.com/address/0xAB8e74017a8Cc7c15FFcCd726603790d26d7DeCa) |
| `TimeToken` | [0x869d1b8610c038A6C4F37bD757135d4C29ae8917](https://etherscan.com/address/0x869d1b8610c038A6C4F37bD757135d4C29ae8917) |
| `MultiSigWalletWithTimeLock` | [0x8392F6669292fA56123F71949B52d883aE57e225](https://etherscan.com/address/0x8392F6669292fA56123F71949B52d883aE57e225) |
| `TransmuterB` | [0xf3cFfaEEa177Db444b68FB6f033d4a82f6D8C82d](https://etherscan.com/address/0xf3cFfaEEa177Db444b68FB6f033d4a82f6D8C82d) |
| `TransmuterVaultAdapter` | [0x491EAFC47D019B44e13Ef7cC649bbA51E15C61d7](https://etherscan.com/address/0x491EAFC47D019B44e13Ef7cC649bbA51E15C61d7) |
| `SLPToken` | [0xc3f279090a47e80990fe3a9c30d24cb117ef91a8](https://etherscan.com/address/0xc3f279090a47e80990fe3a9c30d24cb117ef91a8) |
| `CurveLP` | [0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c](https://etherscan.com/address/0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c) |
