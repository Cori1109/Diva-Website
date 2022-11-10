import React from "react";
import {
  Flex,
  Box,
  Icon,
  Text,
  VStack,
  Stack,
  HStack,
  Link,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export const SocialMediaMeta = ({ title, desc, iconSrc }) => {
  return (
    <VStack
      p="5"
      borderRadius="16px"
      height="160px"
      width={["300px", "300px", "300px", "400px", "600px"]}
      bgGradient="linear(to-r, #303030, #1B1B1B)"
      align={"flex-start"}
    >
      <HStack gap="10px">
        <Image src={iconSrc} alt="SocialmediaImg" />
        <Heading
          color="white"
          fontSize={["lg", "xl", "4xl", "4xl", "4xl"]}
          fontWeight="700"
        >
          {title}
        </Heading>
      </HStack>

      <Text
        color="#A4A4A4"
        fontSize={["14px", "14px", "14px", "20px", "20px"]}
        fontWeight="400"
      >
        {desc}
      </Text>
    </VStack>
  );
};

export const SocialMediaSection = () => {
  return (
    <Box pb={["10", "10", "10", "20", "20"]}>
      <Stack spacing={"10"} textAlign={"center"} align={"center"}>
        <Heading
          fontWeight={"700"}
          color={"white"}
          fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
        >
          Join the conversation
        </Heading>
        <Text
          color={"#A4A4A4"}
          fontWeight={400}
          fontSize={["14px", "14px", "20px", "20px", "20px"]}
          width="70%"
        >
          Our global and vibrant community drives the success of the Protocol.
          Join the conversation on Discord and Twitter to stay up to date on the
          latest community news.
        </Text>
      </Stack>

      <Stack
        py="12"
        align={"center"}
        justify="center"
        spacing="3rem"
        justifyContent={"center"}
        direction={["column", "column", "column", "row", "row"]}
      >
        <Link href="https://discord.gg/DE5b8ZeJjK" isExternal>
          <SocialMediaMeta
            title="Discord"
            desc="Ask questions and engage with the DIVA Community"
            iconSrc={"../images/Discord.png"}
          />
        </Link>
        <Link
          href="https://twitter.com/divaprotocol_io"
          isExternal
        >
          <SocialMediaMeta
            title="Twitter"
            desc="Follow the latest news from DIVA Protocol"
            iconSrc={"../images/twitter.png"}
          />
        </Link>
      </Stack>
    </Box>
  );
};
