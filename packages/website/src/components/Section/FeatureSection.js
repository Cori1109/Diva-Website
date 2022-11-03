import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  Image,
  IconProps,
  Box,
  VStack,
  SimpleGrid,
  Wrap,
  GridItem,
} from "@chakra-ui/react";
import { TbArrowUpRight } from "react-icons/tb";

export const FeatureSection = () => {
  return (
    <>
      <Box
        pt={["10", "10", "unset", "unset", "unset"]}
        textAlign={"center"}
        pb={["2", "2", "5", "5", "5"]}
      >
        <Heading
          fontWeight={"700"}
          color={"white"}
          fontSize={["3xl", "3xl", "6xl", "6xl", "6xl"]}
        >
          Features
        </Heading>
      </Box>
      <Box
        py={["5", "5", "5", "12", "12"]}
        bgImg={{ sm: "", md: "", lg: "./images/featuresbg.png" }}
        bgPosition="center center"
        bgSize="contain"
        bgRepeat="no-repeat"
      >
        <Image
          display={["block", "block", "none", "none", "none"]}
          src="../images/featuresbg.png"
          alt="featuresbgImg"
        />
        <Stack
          spacing="10"
          direction={["column", "column", "row", "row", "row"]}
          width="80%"
          m="auto"
        >
          <Stack
            spacing={["40px", "40px", "80px", "80px", "80px"]}
            width={["100%", "100%", "100%", "50%", "50%"]}
            justify={"space-between"}
            align="start"
          >
            <VStack
              spacing={[2, 2, 5, 5, 5]}
              width={["100%", "100%", "100%", "60%", "60%"]}
              alignItems="center"
              textAlign="center"
            >
              <Heading
                fontWeight={600}
                color={"white"}
                fontSize={["20px", "20px", "24px", "24px", "24px"]}
              >
                Permissionless
              </Heading>
              <Text
                color={"#A4A4A4"}
                fontWeight={400}
                fontSize={["14px", "14px", "20px", "20px", "20px"]}
                width={["90%", "70%", "100%", "100%", "100%"]}
              >
                Anyone can create and settle derivatives on anything without
                permission
              </Text>
            </VStack>
            <VStack
              width={["100%", "100%", "100%", "60%", "60%"]}
              alignItems="center"
              textAlign="center"
              spacing={[2, 2, 5, 5, 5]}
            >
              <Heading
                fontWeight={600}
                color={"white"}
                fontSize={["20px", "20px", "24px", "24px", "24px"]}
              >
                Tradeable
              </Heading>
              <Text
                color={"#A4A4A4"}
                fontWeight={400}
                fontSize={["14px", "14px", "20px", "20px", "20px"]}
                width={["90%", "70%", "100%", "100%", "100%"]}
              >
                Position tokens are ERC20 and can be easily integrated into any
                CEX or DEX
              </Text>
            </VStack>
          </Stack>

          <Stack
            justify="space-between"
            align="flex-end"
            width={["100%", "100%", "100%", "50%", "50%"]}
            spacing={["40px", "40px", "80px", "80px", "80px"]}
          >
            <VStack
              width={["100%", "100%", "100%", "60%", "60%"]}
              alignItems="center"
              textAlign="center"
              spacing={[2, 2, 5, 5, 5]}
            >
              <Heading
                fontWeight={600}
                color={"white"}
                fontSize={["20px", "20px", "24px", "24px", "24px"]}
              >
                Fully collateralized
              </Heading>
              <Text
                color={"#A4A4A4"}
                fontWeight={400}
                fontSize={["14px", "14px", "20px", "20px", "20px"]}
                width={["90%", "70%", "100%", "100%", "100%"]}
              >
                Eliminates counterparty risk and margin calls and gives users a
                safe and frictionless experience
              </Text>
            </VStack>
            <VStack
              width={["100%", "100%", "100%", "60%", "60%"]}
              alignItems="center"
              textAlign="center"
              spacing={[2, 2, 5, 5, 5]}
            >
              <Heading
                fontWeight={600}
                color={"white"}
                fontSize={["20px", "20px", "20px", "24px", "24px"]}
              >
                Highly customizable
              </Heading>
              <Text
                color={"#A4A4A4"}
                fontWeight={400}
                fontSize={["14px", "14px", "20px", "20px", "20px"]}
                width={["90%", "70%", "100%", "100%", "100%"]}
              >
                Flexible payoff profiles, any reference asset, oracle agnostic,
                any ERC20 as collateral
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
