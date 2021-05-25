import { PackageConfig } from "../../src/types";

const config: PackageConfig = {
  projectName: "Compound Finance",
  projectUrl: "https://compound.finance/",
  contracts: {
    cTUSDDelegate: {
      address: "0xce526fa199d2f772abbc5b40b3284cdab1b8e6de",
      source: "etherscan",
    },
    cTUSD: {
      address: "0x12392f67bdf24fae0af363c24ac620a2f67dad86",
      source: "etherscan",
    },
    cLINKDelegate: {
      address: "0x24aa720906378bb8364228bddb8cabbc1f6fe1ba",
      source: "etherscan",
    },
    cLINK: {
      address: "0xface851a4921ce59e912d19329929ce6da6eb0c7",
      source: "etherscan",
    },
    GovernorBravo: {
      address: "0xc0da02939e1441f497fd74f78ce7decb17b66529",
      source: "etherscan",
    },
    cWBTC2Delegate: {
      address: "0x24aa720906378bb8364228bddb8cabbc1f6fe1ba",
      source: "etherscan",
    },
    cWBTC2: {
      address: "0xccF4429DB6322D5C611ee964527D42E5d685DD6a",
      source: "etherscan",
    },
    wbtc2_irm: {
      address: "0xF2e5dB36B0682f2CD6bC805c3a4236194e01f4D5",
      source: "etherscan",
    },
    IRM_COMP_Updateable: {
      address: "0xd956188795ca6F4A74092ddca33E0Ea4cA3a1395",
      source: "etherscan",
    },
    cCOMPDelegate: {
      address: "0x338f7e5d19d9953b76dd81446b142c2d9fe03482",
      source: "etherscan",
    },
    cCOMP: {
      address: "0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4",
      source: "etherscan",
    },
    ZRX: {
      address: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
      source: "etherscan",
    },
    cUSDC: {
      address: "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
      source: "etherscan",
    },
    PriceOracle: {
      address: "0x02557a5e05defeffd4cae6d83ea3d173b272c904",
      source: "etherscan",
    },
    PriceOracleProxy: {
      address: "0xDDc46a3B076aec7ab3Fc37420A8eDd2959764Ec4",
      source: "etherscan",
    },
    Maximillion: {
      address: "0xf859A1AD94BcF445A406B892eF0d3082f4174088",
      source: "etherscan",
    },
    Base200bps_Slope2000bps_Jump20000bps_Kink90: {
      address: "0x6bc8fE27D0c7207733656595e73c0D5Cf7AfaE36",
      source: "etherscan",
    },
    GovernorAlpha: {
      address: "0xc0dA01a04C3f3E0be433606045bB7017A7323E38",
      source: "etherscan",
    },
    cDAI: {
      address: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
      source: "etherscan",
    },
    CompoundLens: {
      address: "0xA1Bd4a10185F30932C78185f86641f11902E873F",
      source: "etherscan",
    },
    DAI: {
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      source: "etherscan",
    },
    StdComptroller: {
      address: "0x62F18C451af964197341d3c86D27e98C41BB8fcC",
      source: "etherscan",
    },
    Poster: {
      address: "0x3c6809319201b978d821190ba03fa19a3523bd96",
      source: "etherscan",
    },
    Unitroller: {
      address: "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B",
      source: "etherscan",
    },
    USDT: {
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      source: "etherscan",
    },
    Reservoir: {
      address: "0x2775b1c75658Be0F640272CCb8c72ac986009e38",
      source: "etherscan",
    },
    Comptroller: {
      address: "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B",
      source: "etherscan",
    },
    COMP: {
      address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
      source: "etherscan",
    },
    cUSDT: {
      address: "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
      source: "etherscan",
    },
    cBAT: {
      address: "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
      source: "etherscan",
    },
    Base500bps_Slope1500bps: {
      address: "0xd928c8ead620bb316d2cefe3caf81dc2dec6ff63",
      source: "etherscan",
    },
    DSR_Kink_9000bps_Jump_12000bps_AssumedRF_500bps: {
      address: "0xec163986cC9a6593D6AdDcBFf5509430D348030F",
      source: "etherscan",
    },
    DSR_Updateable: {
      address: "0xfeD941d39905B23D6FAf02C8301d40bD4834E27F",
      source: "etherscan",
    },
    Base0bps_Slope2000bps: {
      address: "0xc64C4cBA055eFA614CE01F4BAD8A9F519C4f8FaB",
      source: "etherscan",
    },
    BAT: {
      address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
      source: "etherscan",
    },
    StdComptroller_2_6: {
      address: "0x97BD4Cc841FC999194174cd1803C543247a014fe",
      source: "etherscan",
    },
    Base200bps_Slope1000bps: {
      address: "0x0c3f8df27e1a00b47653fde878d68d35f00714c0",
      source: "etherscan",
    },
    cETH: {
      address: "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
      source: "etherscan",
    },
    cDaiDelegate: {
      address: "0xbB8bE4772fAA655C255309afc3c5207aA7b896Fd",
      source: "etherscan",
    },
    cUsdtDelegate: {
      address: "0x976aa93ca5Aaa569109f4267589c619a097f001D",
      source: "etherscan",
    },
    cUniDelegate: {
      address: "0x338f7e5d19d9953b76dd81446b142c2d9fe03482",
      source: "etherscan",
    },
    UNI: {
      address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
      source: "etherscan",
    },
    cUNI: {
      address: "0x35a18000230da775cac24873d00ff85bccded550",
      source: "etherscan",
    },
    StdComptrollerG2: {
      address: "0xf592eF673057a451c49c9433E278c5d59b56132c",
      source: "etherscan",
    },
    DSR_Kink_9000bps_Jump_12000bps_AssumedRF_20000bps: {
      address: "0x000000007675b5E1dA008f037A0800B309e0C493",
      source: "etherscan",
    },
    Base500bps_Slope1200bps: {
      address: "0xa1046abfc2598F48C44Fb320d281d3F3c0733c9a",
      source: "etherscan",
    },
    cSAI: {
      address: "0xF5DCe57282A584D2746FaF1593d3121Fcac444dC",
      source: "etherscan",
    },
    StdComptrollerG3: {
      address: "0x9D0a0443FF4bB04391655B8cD205683d9fA75550",
      source: "etherscan",
    },
    Timelock: {
      address: "0x6d903f6003cca6255D85CcA4D3B5E5146dC33925",
      source: "etherscan",
    },
    Base200bps_Slope3000bps: {
      address: "0xBAE04CbF96391086dC643e842b517734E214D698",
      source: "etherscan",
    },
    StdComptrollerG4: {
      address: "0xAf601CbFF871d0BE62D18F79C31e387c76fa0374",
      source: "etherscan",
    },
    StdComptrollerG5: {
      address: "0x7b5e3521a049C8fF88e6349f33044c6Cc33c113c",
      source: "etherscan",
    },
    cREP: {
      address: "0x158079Ee67Fce2f58472A96584A73C7Ab9AC95c1",
      source: "etherscan",
    },
    Base200bps_Slope2000bps_Jump8000bps_Kink90: {
      address: "0x40C0C2c565335fa9C4235aC8E1CbFE2c97BAC13A",
      source: "etherscan",
    },
    WBTC: {
      address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      source: "etherscan",
    },
    Base200bps_Slope222bps_Kink90_Jump40: {
      address: "0x5562024784cc914069d67D89a28e3201bF7b57E7",
      source: "etherscan",
    },
    SAI: {
      address: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
      source: "etherscan",
    },
    REP: {
      address: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
      source: "etherscan",
    },
    cZRX: {
      address: "0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407",
      source: "etherscan",
    },
    cWBTC: {
      address: "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
      source: "etherscan",
    },
    USDC: {
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      source: "etherscan",
    },
    PriceData: {
      address: "0xc629c26dced4277419cde234012f8160a0278a79",
      source: "etherscan",
    },
    PriceFeed: {
      address: "0x4007b71e01424b2314c020fb0344b03a7c499e1a",
      source: "etherscan",
    },
    KNC: {
      address: "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
      source: "etherscan",
    },
    LINK: {
      address: "0x514910771af9ca656af840dff83e8264ecf986ca",
      source: "etherscan",
    },
    TUSD: {
      address: "0x0000000000085d4780B73119b644AE5ecd22b376",
      source: "etherscan",
    },
    Uniswap: {
      address: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
      source: "etherscan",
    },
    Pair_ETH_ZRX: {
      address: "0xc6f348dd3b91a56d117ec0071c1e9b83c0996de4",
      source: "etherscan",
    },
    Pair_ETH_KNC: {
      address: "0xf49c43ae0faf37217bdcb00df478cf793edd6687",
      source: "etherscan",
    },
    Pair_COMP_ETH: {
      address: "0xcffdded873554f362ac02f8fb1f02e5ada10516f",
      source: "etherscan",
    },
    Pair_LINK_ETH: {
      address: "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
      source: "etherscan",
    },
    Pair_DAI_ETH: {
      address: "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11",
      source: "etherscan",
    },
    Pair_WBTC_ETH: {
      address: "0xbb2b8038a1640196fbe3e38816f3e67cba72d940",
      source: "etherscan",
    },
    Pair_REP_ETH: {
      address: "0xec2D2240D02A8cf63C3fA0B7d2C5a3169a319496",
      source: "etherscan",
    },
    Pair_BAT_ETH: {
      address: "0xb6909b960dbbe7392d405429eb2b3649752b4838",
      source: "etherscan",
    },
    Pair_ETH_USDC: {
      address: "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
      source: "etherscan",
    },
    PriceFeedPoster: {
      address: "0x83563ba7f1b093aae57fe876f8d870f8a1508886",
      source: "etherscan",
    },
    CrowdProposalFactory: {
      address: "0x54a06047087927D9B0fb21c1cf0ebd792764dDB8",
      source: "etherscan",
    },
    IRM_USDT_Updateable: {
      address: "0xFB564da37B41b2F6B6EDcc3e56FbF523bD9F2012",
      source: "etherscan",
    },
    IRM_USDC_Updateable: {
      address: "0xD8EC56013EA119E7181d231E5048f90fBbe753c0",
      source: "etherscan",
    },
    IRM_UNI_Updateable: {
      address: "0xd88b94128ff2b8cf2d7886cd1c1e46757418ca2a",
      source: "etherscan",
    },
  },
};

export default config;
