import {
  ALL_SUPPORTED_CHAIN_IDS,
  config,
  CURRENT_SUPPORTED_CHAIN_ID,
  SupportedChainId,
} from '../constants'
import styled from '@emotion/styled'
import { useAppSelector } from '../redux/hooks'
import { selectChainId } from '../redux/appSlice'
import { utils } from 'ethers'
import { Box, Modal, Text, Tooltip } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

interface ChainSelectorModalProps {
  onClose: () => void
  isOpen: boolean
}

const NetworkInfoContainer = styled.div<{
  isSupportedChain: boolean;
}>`
  display: flex;
  padding: 14px;
  align-items: center;
  border: 1px solid rgb(67, 72, 77);
  cursor: ${(props) => (props.isSupportedChain ? "pointer" : "not-allowed")};
  opacity: ${(props) => (props.isSupportedChain ? 1 : 0.5)};
  &:hover {
    border: 1px solid;
  }
`;

const NetworkInfo = ({
  chainId,
  onClose,
}: {
  chainId: SupportedChainId
  onClose: () => void
}) => {
  const { name } = config[chainId];
  const connectedChainId = useAppSelector(selectChainId)
  const isSupportedChain = CURRENT_SUPPORTED_CHAIN_ID.includes(chainId)

  const handleNetworkClick = async () => {
    if (!isSupportedChain) return // do nothing if the chain is not supported
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: utils.hexStripZeros(utils.hexlify(chainId)) }],
      })
      onClose()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Tooltip title={!isSupportedChain ? "Coming soon" : ""}>
      <NetworkInfoContainer
        onClick={handleNetworkClick}
        isSupportedChain={isSupportedChain}
      >
        <>
          <div>
            {/*<img
              src={logoUrl}
              alt={name}
              style={{
                width: '40px',
                marginRight: '12px',
              }}
            />*/}
          </div>
          <div>
            <Text>{name}</Text>
            <Text
              sx={{
                opacity: 0.5,
              }}
            >
              {connectedChainId === chainId ? "Connected" : ""}
            </Text>
          </div>
        </>
      </NetworkInfoContainer>
    </Tooltip>
  );
}

const ChainSelectorModal = ({ onClose, isOpen }: ChainSelectorModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text id="modal-modal-title" fontWeight={700}>
            Select network
          </Text>

          <CloseIcon
            sx={{
              cursor: "pointer",
            }}
            onClick={onClose}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gridGap: "16px",
            marginTop: "16px",
          }}
        >
          {ALL_SUPPORTED_CHAIN_IDS.map((chainId) => (
            <NetworkInfo key={chainId} chainId={chainId} onClose={onClose} />
          ))}
        </Box>
      </Box>
    </Modal>
  );
}

export default ChainSelectorModal
