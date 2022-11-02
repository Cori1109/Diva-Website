export const IMAGE_PATH = "/images/posts/";
export const POSTS_PATH = "/_posts/";
export const HOME = "https://diva.finance";
export const TITLE = "DIVA Protocol - Derivatives on the Ethereum blockchain";
export const DESCRIPTION =
  "DIVA protocol is open infrastructure that will allow everyone to create prediction markets, insurance and derivative products. One single protocol for many different use cases. Stay tuned for our launch in Q3 2022";

export enum SupportedChainId {
  ROPSTEN = 3,
  MAINNET = 1,
  GOERLI = 5,
  POLYGON = 137,
  POLYGON_MUMBAI = 80001,
  ARBITRUM_ONE = 42161,
}

export const config = {
  [SupportedChainId.MAINNET]: {
    name: "Ethereum",
    divaAddress: "",
    divaAddressNew: "",
    balanceCheckAddress: "",
    exchangeProxy: "",
    whitelistAddress: "",
    divaSubgraph: "",
    whitelistSubgraph: "",
    allOrders: "",
    order: "",
    orderbook: "",
    explorer: "https://etherscan.io/",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    isSupported: false,
  },
  [SupportedChainId.ROPSTEN]: {
    name: "Ropsten",
    divaAddress: "0xebBAA31B1Ebd727A1a42e71dC15E304aD8905211",
    divaAddressNew: "",
    balanceCheckAddress: "0xD713aeC2156709A6AF392bb84018ACc6b44f1885",
    exchangeProxy: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
    whitelistAddress: "0x5a4385BAf615A35f79787A5cEDFb7ac44Fb26D7e",
    divaSubgraph:
      "https://api.thegraph.com/subgraphs/name/divaprotocol/diva-ropsten",
    whitelistSubgraph:
      "https://api.thegraph.com/subgraphs/name/divaprotocol/diva-whitelist-ropsten",
    allOrders: "https://ropsten.api.0x.org/orderbook/v1/orders/",
    order: "https://ropsten.api.0x.org/orderbook/v1/order/",
    orderbook: "https://ropsten.api.0x.org/orderbook/v1",
    explorer: "https://ropsten.etherscan.io/",
    nativeCurrency: { name: "Ropsten Ether", symbol: "ropETH", decimals: 18 },
    isSupported: true,
  },
  [SupportedChainId.GOERLI]: {
    divaAddress: "0x8f138cfC5de71FCde7FdeCd87EAC6Aa6A536Bf85",
    divaAddressNew: "0x6cDEc9b70431bf650f3A0DDD0e246368a4C4F1E1",
    balanceCheckAddress: "0x9293ff9733AC7666A8251564C083191c3DA8BE19",
    exchangeProxy: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
    whitelistAddress: "0x017aA6E15e406b85b8b1dF322e39444D819C8F43",
    divaSubgraph:
      "https://api.thegraph.com/subgraphs/name/divaprotocol/diva-goerli",
    whitelistSubgraph:
      "https://api.thegraph.com/subgraphs/name/divaprotocol/diva-whitelist-goerli",
    allOrders: "https://eip712api.xyz/orderbook/v1/orders/",
    order: "https://eip712api.xyz/orderbook/v1/order/",
    orderbook: "https://eip712api.xyz/orderbook/v1",
    explorer: "https://goerli.etherscan.io/",
    name: "Görli",
    nativeCurrency: { name: "Görli Ether", symbol: "görETH", decimals: 18 },
    isSupported: true,
  },
  [SupportedChainId.POLYGON]: {
    name: "Polygon",
    divaAddress: "",
    divaAddressNew: "",
    balanceCheckAddress: "",
    exchangeProxy: "",
    whitelistAddress: "",
    divaSubgraph: "",
    whitelistSubgraph: "",
    allOrders: "",
    order: "",
    orderbook: "",
    explorer: "https://polygonscan.com/",
    nativeCurrency: { name: "Polygon Matic", symbol: "MATIC", decimals: 18 },
    isSupported: false,
  },
  [SupportedChainId.POLYGON_MUMBAI]: {
    name: "Mumbai",
    divaAddress: "",
    divaAddressNew: "",
    balanceCheckAddress: "",
    exchangeProxy: "",
    whitelistAddress: "",
    divaSubgraph: "",
    whitelistSubgraph: "",
    allOrders: "",
    order: "",
    orderbook: "",
    explorer: "https://mumbai.polygonscan.com/",
    nativeCurrency: {
      name: "Polygon Mumbai Matic",
      symbol: "mMATIC",
      decimals: 18,
    },
    isSupported: false,
  },
  [SupportedChainId.ARBITRUM_ONE]: {
    name: "Arbitrum",
    divaAddress: "",
    divaAddressNew: "",
    balanceCheckAddress: "",
    exchangeProxy: "",
    whitelistAddress: "",
    divaSubgraph: "",
    whitelistSubgraph: "",
    allOrders: "",
    order: "",
    orderbook: "",
    explorer: "https://arbiscan.io/",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    isSupported: false,
  },
};

// array of all chains id
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === 'number') as SupportedChainId[]

// current supported chain
export const CURRENT_SUPPORTED_CHAIN_ID = [SupportedChainId.ROPSTEN]