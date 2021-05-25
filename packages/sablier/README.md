# @solidity-js/sablier

Smart contract ABIs for [Sablier](https://sablier.finance/), packaged by [SolidityJS](https://github.com/solidity-js).

## Usage

**Always remember to install a _specific_ package version.**

    $ npm install @solidity-js/sablier@1.0.0

    // or

    $ yarn add @solidity-js/sablier@1.0.0

Load in JS/TS:

    import { ContractName } from "@solidity-js/sablier";

    // or

    const { ContractName } = require("@solidity-js/sablier");

Then use with ethers.js:

    new ethers.Contract(ContractName.address, ContractName.abi)

Or web3.js:

    new web3.eth.Contract(ContractName.abi, ContractName.address)


## Available contracts

| Name | Address |
| ---- | ------- |
| `Sablier` | [0xA4fc358455Febe425536fd1878bE67FfDBDEC59a](https://etherscan.com/address/0xA4fc358455Febe425536fd1878bE67FfDBDEC59a) |
