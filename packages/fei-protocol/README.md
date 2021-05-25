# @solidity-js/fei-protocol

Smart contract ABIs for [Fei Protocol](https://fei.money/), packaged by [SolidityJS](https://github.com/solidity-js).

## Usage

**Always remember to install a _specific_ package version.**

    $ npm install @solidity-js/fei-protocol@1.0.0

    // or

    $ yarn add @solidity-js/fei-protocol@1.0.0

Load in JS/TS:

    import { ContractName } from "@solidity-js/fei-protocol";

    // or

    const { ContractName } = require("@solidity-js/fei-protocol");

Then use with ethers.js:

    new ethers.Contract(ContractName.address, ContractName.abi)

Or web3.js:

    new web3.eth.Contract(ContractName.abi, ContractName.address)

## Available contracts

| Name   | Address                                                                                                                |
| ------ | ---------------------------------------------------------------------------------------------------------------------- | --- | ------- | ---------------------------------------------------------------------------------------------------------------------- | --- | -------- | ---------------------------------------------------------------------------------------------------------------------- | --- | ---------------- | ---------------------------------------------------------------------------------------------------------------------- | --- | ----- | ---------------------------------------------------------------------------------------------------------------------- | --- | ------------------ | ---------------------------------------------------------------------------------------------------------------------- | --- | ----------------- | ---------------------------------------------------------------------------------------------------------------------- | --- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------- | --- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --- | --------------- | ---------------------------------------------------------------------------------------------------------------------- | --- | -------------------- | ---------------------------------------------------------------------------------------------------------------------- | --- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- | --- | ------------------- | ---------------------------------------------------------------------------------------------------------------------- | --- | -------------- | ---------------------------------------------------------------------------------------------------------------------- | --- | ----------- | ---------------------------------------------------------------------------------------------------------------------- | --- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------- | --- | --------------- | ---------------------------------------------------------------------------------------------------------------------- | --- | -------------------- | ---------------------------------------------------------------------------------------------------------------------- | --- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `Core` | [0x8d5ED43dCa8C2F7dFB20CF7b53CC7E593635d7b9](https://etherscan.com/address/0x8d5ED43dCa8C2F7dFB20CF7b53CC7E593635d7b9) |     | `Tribe` | [0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B](https://etherscan.com/address/0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B) |     | `FeiDAO` | [0xE087F94c3081e1832dC7a22B48c6f2b5fAaE579B](https://etherscan.com/address/0xE087F94c3081e1832dC7a22B48c6f2b5fAaE579B) |     | `FeiDAOTimelock` | [0x639572471f2f318464dc01066a56867130e45E25](https://etherscan.com/address/0x639572471f2f318464dc01066a56867130e45E25) |     | `Fei` | [0x956F47F50A910163D8BF957Cf5846D573E7f87CA](https://etherscan.com/address/0x956F47F50A910163D8BF957Cf5846D573E7f87CA) |     | `UniswapIncentive` | [0xfe5b6c2a87A976dCe20130c423C679f4d6044cD7](https://etherscan.com/address/0xfe5b6c2a87A976dCe20130c423C679f4d6044cD7) |     | `EthBondingCurve` | [0xe1578B4a32Eaefcd563a9E6d0dc02a4213f673B7](https://etherscan.com/address/0xe1578B4a32Eaefcd563a9E6d0dc02a4213f673B7) |     | `EthUniswapPCVDeposit` | [0x5d6446880fcd004c851ea8920a628c70ca101117](https://etherscan.com/address/0x5d6446880fcd004c851ea8920a628c70ca101117) |     | `EthUniswapPCVController` | [0x0760dfe09bd6d04d0df9a60c51f01ecedceb5132](https://etherscan.com/address/0x0760dfe09bd6d04d0df9a60c51f01ecedceb5132) |     | `UniswapOracle` | [0x087F35bd241e41Fc28E43f0E8C58d283DD55bD65](https://etherscan.com/address/0x087F35bd241e41Fc28E43f0E8C58d283DD55bD65) |     | `BondingCurveOracle` | [0x89714d3AC9149426219a3568543200D1964101C4](https://etherscan.com/address/0x89714d3AC9149426219a3568543200D1964101C4) |     | `FeiRewardsDistributor` | [0xEf1a94AF192A88859EAF3F3D8C1B9705542174C5](https://etherscan.com/address/0xEf1a94AF192A88859EAF3F3D8C1B9705542174C5) |     | `FeiStakingRewards` | [0x18305DaAe09Ea2F4D51fAa33318be5978D251aBd](https://etherscan.com/address/0x18305DaAe09Ea2F4D51fAa33318be5978D251aBd) |     | `GenesisGroup` | [0xBFfB152b9392e38CdDc275D818a3Db7FE364596b](https://etherscan.com/address/0xBFfB152b9392e38CdDc275D818a3Db7FE364596b) |     | `FeiRouter` | [0x9271D303b57c204636C38Df0eD339b18Bf98f909](https://etherscan.com/address/0x9271D303b57c204636C38Df0eD339b18Bf98f909) |     | `EthReserveStabilizer` | [0xa08A721dFB595753FFf335636674D76C455B275C](https://etherscan.com/address/0xa08A721dFB595753FFf335636674D76C455B275C) |     | `EthPCVDripper` | [0xDa079A280FC3e33Eb11A78708B369D5Ca2da54fE](https://etherscan.com/address/0xDa079A280FC3e33Eb11A78708B369D5Ca2da54fE) |     | `RatioPCVController` | [0xfC1aD6eb84351597cD3b9B65179633697d65B920](https://etherscan.com/address/0xfC1aD6eb84351597cD3b9B65179633697d65B920) |     | `EthPCVDepositAdapter` | [0xB72dDeD4Fa321e093E2083B596404A56ffC5b574](https://etherscan.com/address/0xB72dDeD4Fa321e093E2083B596404A56ffC5b574) |
