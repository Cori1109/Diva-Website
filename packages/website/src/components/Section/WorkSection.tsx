import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  HStack,
  Avatar,
  Image,
  useImage,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaPlayCircle } from "react-icons/fa";
import { WorksectionCard } from "./WorksectionCard";

export const WorkSection = () => {
  return (
    <Stack py={["5", "5", "5", "12", "12"]} justifyContent="space-between">
      <Box
        pb={["", "", "", "10", "10"]}
        textAlign="center"
        alignContent="center"
      >
        <Heading
          fontWeight={"700"}
          color={"white"}
          fontSize={["3xl", "3xl", "3xl", "6xl", "6xl"]}
        >
          How it works
        </Heading>
      </Box>
      <Stack
        bgImg={["", "", "", "", "./images/arrowbg.png"]}
        bgPosition={["", "", "", "20px 30px", "20px 30px", "40% 30px"]}
        bgSize="initial"
        bgRepeat="no-repeat"
        textAlign={"center"}
        justifyContent={"center"}
        align="center"
        py={["5", "5", "5", "12", "12"]}
      >
        <Stack
          direction={["column", "column", "column", "column", "row"]}
          spacing={["40px", "40px", "40px", "40px", "80px"]}
          py="10"
          align="center"
        >
          <WorksectionCard
            title="Step 1: Specify"
            desc="Specify the offer terms including underlying event, payoff profile
          and price"
            iconSrc="../images/Specify.png"
          />
          <WorksectionCard
            title="Step 2: Sign & Share"
            desc="Sign the offer with your private key and share it with counterparties via email, chat or social media"
            iconSrc="../images/Sign&Share.png"
          />
          <WorksectionCard
            title="Step 3: Fill"
            desc="The derivative contract is created on-chain once a counterparty accepts your offer"
            iconSrc="../images/Fill.png"
          />
          <WorksectionCard
            title="Step 4: Redeem"
            desc="Claim your payout after the event outcome has been reported by an oracle following expiration"
            iconSrc="../images/Redeem.png"
          />
        </Stack>

        <HStack
          spacing={"5"}
          as="button"
          py="10px"
          px="10px"
          bg="linear-gradient(90deg, #00C2FF -21.11%, #0038FF 100%)"
          borderRadius="50px"
          fontWeight="bold"
          _hover="none"
          borderColor="#ccd0d5"
          color="#ffffff"
          align="center"
        >
          <Icon
            as={FaPlayCircle}
            boxSize={["2em", "2em", "2em", "3em"]}
            color="#ffffff"
          />
          <Box pr="2" fontSize={"21"} textAlign="center">
            Watch Video
          </Box>
        </HStack>
      </Stack>
    </Stack>
  );
};
