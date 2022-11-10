import ChainSelectorModal from './ChainSelectorModal'
import { useState } from 'react'
import config from 'next/config'
import { useConnectionContext } from '../hooks/useConnectionContext'
import { selectChainId, selectUserAddress } from '../redux/appSlice'
import { useAppSelector } from '../redux/hooks'
import { Badge } from '@chakra-ui/react'

export function NetworkTag() {
  const { isConnected } = useConnectionContext()
  const chainId = useAppSelector(selectChainId)
  const userAddress = useAppSelector(selectUserAddress)

  const [isChainSelectorModalOpen, setIsChainSelectorModalOpen] =
    useState<boolean>(false)

  if (isConnected && userAddress) {
    return (
      <>
        <Badge onClick={() => setIsChainSelectorModalOpen(true)}>
          {config[chainId]?.name || "Unsupported"}
        </Badge>
        <ChainSelectorModal
          onClose={() => setIsChainSelectorModalOpen(false)}
          isOpen={isChainSelectorModalOpen}
        />
      </>
    );
  } else {
    return <Badge>Preview (Goerli)</Badge>;
  }
}
