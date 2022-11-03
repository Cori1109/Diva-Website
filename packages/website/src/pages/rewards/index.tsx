import { useAppSelector } from "../../redux/hooks";
import { selectChainId, selectUserAddress } from "../../redux/appSlice";
import { useEffect, useState } from "react";
import { Alert, AlertIcon, Box, Button, ButtonGroup, Container, Heading, Link, Stack, Text } from "@chakra-ui/react";

/**
 * TODO: load rewards via ajax
 */
import rewards from "./rewards.json";
import Layout from "../../components/layout/Layout";
import { ConnectWalletButton } from "../../components/ConnectWalletButton";

const Rewards = () => {
  const userAddress = useAppSelector(selectUserAddress);
  const chainId = useAppSelector(selectChainId);
  const [rewardInfo, setRewardInfo] = useState<any>({});
  useEffect(() => {
    (rewards as any[]).forEach((reward) => {
      if (reward.address === userAddress) {
        setRewardInfo(reward);
      }
    });
  }, [userAddress]);
  return (
    <Layout>
      <Stack>
        <Container
          style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Heading>$DIVA Token Claim</Heading>
          <Text>$DIVA is the governance token for DIVA Protocol.</Text>
          {userAddress === undefined && (
            <>
              <Text variant="body1">
                Connect your wallet to determine your eligibility.
              </Text>
              <ConnectWalletButton />
            </>
          )}
          {userAddress !== undefined && rewardInfo == null && (
            <Alert status="error">
              <AlertIcon />
              Connected account was not registered for the testnet
            </Alert>
          )}
          {userAddress !== undefined &&
            rewardInfo.reward !== undefined &&
            rewardInfo.reward !== "" && (
              <Text>
                You are eligible for token claim, below are the details of your
                participation.
              </Text>
            )}

          {userAddress !== undefined && rewardInfo.reward === "" && (
            <Alert status="error">
              <AlertIcon />
              {"You are not eligible. Reason: " + rewardInfo.comment}
            </Alert>
          )}
          {userAddress !== undefined &&
            rewardInfo.reward !== undefined &&
            rewardInfo.reward !== "" && (
              <Box
                style={{
                  minWidth: "47%",
                  border: "1px solid #1B3448",
                  background:
                    "linear-gradient(180deg, #051827 0%, rgba(1, 12, 39, 0) 100%)",
                }}
              >
                <Container>
                  <Stack>
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "space-between",
                      }}
                    >
                      <Text color="common.white">Total Testnet Points</Text>
                      <Text color="common.white">{rewardInfo.points}</Text>
                    </Stack>
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "space-between",
                      }}
                    >
                      <Text color="common.white">Your $DIVA token reward</Text>
                      <Text color="common.white">
                        {Number(rewardInfo.reward).toFixed(1)}
                      </Text>
                    </Stack>
                  </Stack>
                </Container>
              </Box>
            )}
          {userAddress !== undefined &&
            rewardInfo.reward !== undefined &&
            rewardInfo.reward !== "" && (
              <Stack>
                <Button
                  isLoading={chainId == null}
                  type="submit"
                  value="Submit"
                  disabled={true}
                  style={{
                    background: "darkgray",
                    outline: "gray",
                    color: "white",
                  }}
                >
                  Claim
                </Button>
                <Alert status="info">
                  <AlertIcon />
                  You will be able to claim your rewards once the token launches
                </Alert>
              </Stack>
            )}
          {userAddress !== undefined && rewardInfo.reward === undefined && (
            <Alert status="error">
              <AlertIcon />
              You are not eligible. Reason: Not registered
            </Alert>
          )}
        </Container>
      </Stack>
    </Layout>
  );
};

export default Rewards;
