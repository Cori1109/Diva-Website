import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { providers } from 'ethers'

import { RootState } from './Store'


type RequestState = 'pending' | 'fulfilled' | 'rejected'

type AppState = {
  statusByName: Record<string, RequestState | undefined>
  isBuy: boolean
  underlyingPrice: {
    [poolId: string]: string
  }
  orders: {
    [poolId: string]: {
      long: {
        buy: any[]
      }
      short: {
        sell: any[]
        buy: any[]
      }
    }
  }
}

type AppStateByChain = {
  chainId?: number
  userAddress?: string
  provider?: providers.Web3Provider
  [chainId: number]: AppState
}

export const defaultAppState = {
  statusByName: {},
  isBuy: true,
  pools: [],
  feeRecipients: [],
  positionTokens: [],
  underlyingPrice: {},
  orders: {},
}

export const initialState: AppStateByChain = {
  1: defaultAppState,
  3: defaultAppState,
  4: defaultAppState,
  5: defaultAppState,
  42: defaultAppState,
  137: defaultAppState,
  80001: defaultAppState,
}


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsBuy: (state, action: PayloadAction<boolean>) => {
      state[state.chainId].isBuy = action.payload
    },
    setChainId: (state, action: PayloadAction<number>) => {
      state.chainId = action.payload
    },
    setUserAddress: (state, action: PayloadAction<string>) => {
      state.userAddress = action.payload
    },
  },
})


export const selectChainId = (state: RootState) => state.appSlice.chainId

export const selectUserAddress = (state: RootState) =>
  state.appSlice.userAddress

export const { setUserAddress, setChainId } = appSlice.actions
