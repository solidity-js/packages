# SolidityJS Packages

SolidityJS packages up common solidity ABIs and contract addresses.

Each package then gets published on NPM:

    $ npm install @solidity-js/fei-protocol@0.0.1

This makes it easy to load contract ABIs for usage in JavaScript apps:

    import { Core } from "@solidity-js/fei-protocol";

    const contract = new ethers.Contract(Core.address, Core.abi, provider);

    const hasGenesisGroupCompleted = await contract.hasGenesisGroupCompleted(); // true

## todo / to investigate

- [ ] How to handle multiple contracts with the same ABI (eg Uniswap token pairs)
- [ ] Validation processes. How can consumers be sure that the ABIs and addresses are valid?
  - More links to project websites
  - [Sourcify](https://github.com/ethereum/sourcify) integration?
  - Post-install message to warn users?
  - File hashes?
  - An on-chain smart contract address registry?
  - Periodic GH Actions checks
- [ ] Testnets
- [ ] Better CLI output, colours etc
