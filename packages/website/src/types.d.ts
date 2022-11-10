import { ExternalProvider, BaseProvider } from '@ethersproject/providers'

type MetamaskProvider = ExternalProvider &
  BaseProvider & {
    isConnected: () => boolean
    chainId: string
  }

declare global {
  interface Window {
    ethereum: MetamaskProvider
    web3?: {
      currentProvider: any
    }
  }
}
