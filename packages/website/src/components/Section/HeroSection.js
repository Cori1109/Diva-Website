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
  Link,
} from "@chakra-ui/react";

import { TbArrowUpRight } from "react-icons/tb";

export const HeroSection = () => {
  return (
    <Stack
      direction={[
        "column-reverse",
        "column-reverse",
        "column",
        "column",
        "column",
      ]}
    >
      <Image w={"100%"} position="relative" src="./bgimg1.png" alt="bgimg" />
      <Stack
        position={["auto", "auto", "relative", "relative", "relative"]}
        top={["auto", "auto", "-535px", "-635px", "-50vw"]}
        zIndex="1"
        textAlign={"center"}
        align="center"
        spacing={{ base: 8, md: 10 }}
      >
        <Heading
          fontWeight={"700"}
          color={"white"}
          fontSize={["3xl", "3xl", "3xl", "6xl", "6xl"]}
        >
          Powering the World of{" "}
          <Text
            as="span"
            bgGradient="linear(to-l, #0038FF, #16E3D8)"
            bgClip="text"
          >
            Derivatives
          </Text>
        </Heading>
        <Text
          px="10"
          maxW="4xl"
          color={"#A4A4A4"}
          fontWeight={400}
          fontSize={["sm", "sm", "xl", "xl", "xl"]}
          lineHeight={["none", "none", "6", "6", "6"]}
        >
          DIVA Protocol is a decentralized and permissionless piece of
          infrastructure that allows its users to create and settle fully
          customizable financial derivative contracts peer-to-peer
        </Text>

        <Box>
          <Stack
            direction={["column", "column", "row", "row", "row"]}
            justify="center"
            spacing={6}
          >
            <Link
              _hover={"none"}
              href="https://docs.divaprotocol.io/"
              isExternal
            >
              <Button
                textAlign={"center"}
                bg="linear-gradient(270deg, #00C2FF 0%, #0038FF 100%)"
                borderRadius="6px"
                fontFamily={"body"}
                fontSize="16px"
                fontWeight={"500"}
                color={"#F2F2F2"}
                _hover={{ color: "black" }}
                rightIcon={<TbArrowUpRight />}
                size="lg"
                width="200px"
              >
                DOCUMENTATION
              </Button>
            </Link>
            <Link _hover={"none"} href="/dapps">
              <Button
                textAlign={"center"}
                textColor="#00C2FF"
                border={"1px"}
                col
                bg="linear(to-r, #ffffff, #a01450)"
                _hover="none"
                size="lg"
                width="200px"
                fontFamily={"body"}
                fontSize="16px"
                fontWeight={"500"}
              >
                EXPLORE APPS
              </Button>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};
