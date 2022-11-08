import { Button, useMediaQuery } from '@chakra-ui/react'
import { useConnectionContext } from '../hooks/useConnectionContext'
import { selectChainId, selectUserAddress } from '../redux/appSlice'
import { useAppSelector } from '../redux/hooks'
import { getShortenedAddress } from '../util/getShortenedAddress'

export function ConnectWalletButton() {
  const { isConnected, disconnect, connect } = useConnectionContext()
  const userAddress = useAppSelector(selectUserAddress)
  const chainId = useAppSelector(selectChainId)

  return (
    <Button
      variant="outline"
      isLoading={chainId == null}
      type="submit"
      value="Submit"
      sx={{ marginLeft: "10px" }}
      onClick={() => (isConnected && userAddress ? disconnect() : connect())}
    >
      {isConnected && userAddress
        ? getShortenedAddress(userAddress)
        : "Connect Wallet"}
    </Button>
  );
}
