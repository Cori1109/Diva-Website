import { Box, Flex, Stack, Image, Heading, Text } from "@chakra-ui/react";

export const WorksectionCard = ({ title, desc, iconSrc }) => {
  return (
    <Flex
      maxWidth={["320px", "320px", "80%", "80%", "260px"]}
      direction="column"
      justify="center"
    >
      <Flex
        background="linear-gradient(247.52deg, rgba(0, 56, 255, 0.16) 1.52%, rgba(255, 255, 255, 0) 96.99%)"
        boxShadow="inset -2px -2px 100px rgba(255, 255, 255, 0.1), inset 2px 2px 100px rgba(66, 66, 66, 0.1)"
        borderRadius="20px"
        backdropFilter="blur(25px)"
        justify="center"
        mb={10}
      >
        <Image w="260px" h="260px" src={iconSrc} alt="SpecifyImg" />
      </Flex>
      <Stack spacing={6} py="5" align={"center"} justify="center">
        <Heading
          fontWeight={700}
          color={"white"}
          fontSize={["20px", "20px", "24px", "24px", "24px"]}
          lineHeight={["23px", "23px", "23px", , "28px", "28px"]}
        >
          {title}
        </Heading>
        <Text
          color={"#A4A4A4"}
          fontWeight={400}
          fontSize={["14px", "14px", "20px", "20px", "20px"]}
          lineHeight={["24px", "24px", "24px", , "30px", "30px"]}
          width={["70%", "70%", "70%", "70%", "100%"]}
          textAlign="center"
        >
          {desc}
        </Text>
      </Stack>
    </Flex>
  );
};
