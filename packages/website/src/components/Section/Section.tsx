import { Box, Stack, Image, Heading, Text, VStack } from "@chakra-ui/react";

export const Section = ({ title, desc, iconSrc }) => {
  return (
    <>
      <VStack
        w={["100%", "100%", "50%", "50%", "50%"]}
        justifyContent="center"
        align="flex-start"
      >
        <Heading
          fontWeight={700}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          color={"white"}
        >
          {title}
        </Heading>
        <Text
          fontWeight={400}
          fontSize={["sm", "sm", "xl", "xl", "xl"]}
          color={"#A4A4A4"}
        >
          {desc}
        </Text>
      </VStack>
      <Box w={["100%", "100%", "30%", "30%", "30%"]}>
        <Image src={iconSrc} alt="VisionImg" />
      </Box>
    </>
  );
};
