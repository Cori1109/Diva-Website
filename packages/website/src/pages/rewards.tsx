import { useAppSelector } from "../redux/hooks";
import { selectUserAddress } from "../redux/appSlice";
import { useEffect, useState } from "react";
import { Alert, AlertIcon, Box, Button, ButtonGroup, Container, Heading, Link, Stack, Text } from "@chakra-ui/react";

/**
 * TODO: load rewards via ajax
 */
import Layout from "../components/layout/Layout";
import { ConnectWalletButton } from "../components/ConnectWalletButton";

const Rewards = () => {
  const userAddress = useAppSelector(selectUserAddress);
  const [rewardInfo, setRewardInfo] = useState<any>({});
  const [rewards, setRewards] = useState<any[]>([]);
  useEffect(() => {
    const get = async () => {
      const res = await fetch(`/api/rewards/${userAddress}`, {
        method: "GET",
      });
      const json = await res.json();
      setRewards(json);
    };
    get();
  }, [userAddress]);
  useEffect(() => {
    (rewards as any[]).forEach((reward) => {
      if (userAddress && reward.address.toLowerCase() === userAddress.toLowerCase()) {
        setRewardInfo(reward);
      }
    });
  }, [rewards, userAddress]);
  return (
    <Layout>
      <Stack
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          color: "white",
          height: "50vh",
          textAlign: "center",
        }}
        spacing={8}
      >
        <Box textAlign={"center"}>
          <Heading paddingBottom="8">$DIVA Token Claim</Heading>
          <Text>$DIVA is the governance token for DIVA Protocol.</Text>
        </Box>
        {userAddress === undefined && (
          <>
            <Text variant="body1" paddingBottom={18}>
              Connect your wallet to determine your eligibility.
            </Text>
          </>
        )}
        {userAddress !== undefined && rewardInfo == null && (
          <Alert
            status="error"
            color="black"
            width={"auto"}
            padding={22}
            fontSize={"large"}
          >
            <AlertIcon />
            Connected account was not registered for the testnet
          </Alert>
        )}
        {userAddress !== undefined &&
          rewardInfo.reward !== undefined &&
          rewardInfo.reward !== "" && (
            <Alert
              status="success"
              color="black"
              width={"auto"}
              padding={22}
              fontSize={"large"}
            >
              <AlertIcon />
              You are eligible for token claim, below are the details of your
              participation.
            </Alert>
          )}

        {userAddress !== undefined && rewardInfo.reward === "" && (
          <Alert
            status="error"
            color="black"
            width={"auto"}
            padding={22}
            fontSize={"large"}
          >
            <AlertIcon />
            {"You are not eligible. Reason: " + rewardInfo.comment}
          </Alert>
        )}
        {userAddress !== undefined &&
          rewardInfo.reward !== undefined &&
          rewardInfo.reward !== "" && (
            <Box
              borderRadius={4}
              style={{
                maxWidth: "fit-content",
                border: "1px solid #1B3448",
                background:
                  "linear-gradient(180deg, #051827 0%, rgba(1, 12, 39, 0) 100%)",
              }}
            >
              <Container>
                <Stack spacing={8} padding={18}>
                  <Stack
                    direction={"row"}
                    spacing={8}
                    sx={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>Total Testnet Points</Text>
                    <Text>{rewardInfo.points}</Text>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={8}
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
            <Alert
              status="info"
              color="black"
              width={"auto"}
              padding={22}
              fontSize={"large"}
            >
              <AlertIcon />
              You will be able to claim your rewards once the token launches
            </Alert>
          )}
        {userAddress !== undefined && rewardInfo.reward === undefined && (
          <Alert status="error" width={"auto"} padding={22} fontSize={"large"}>
            <AlertIcon />
            <Text color="black">You were not registered</Text>
          </Alert>
        )}

        <Box paddingBottom={20}>
          <ConnectWalletButton />
        </Box>
      </Stack>
    </Layout>
  );
};

export default Rewards;
