import {
  Heading,
  Stack,
  HStack,
  Text,
  Icon,
  Image,
  Box,
  VStack,
  Avatar,
  Wrap,
  Link,
  Button,
} from "@chakra-ui/react";

export const CTASection = ({ title, desc, children }) => {
  return (
    <Box py={12}>
      <Stack
        p="10"
        spacing={8}
        backdropFilter="blur(25px)"
        borderRadius="20px"
        border="1px solid rgba(51, 147, 224, 1)"
        shadow="inset -2px -2px 100px rgba(255, 255, 255, 0.1), inset 2px 2px 100px rgba(66, 66, 66, 0.1)"
        background="linear-gradient(247.52deg, rgba(0, 56, 255, 0.16) 1.52%, rgba(255, 255, 255, 0) 96.99%)"
        color="white"
      >
        <VStack textAlign="center">
          <Heading
            fontWeight={700}
            fontSize={["30px", "30px", "30px", "60px", "60px"]}
            lineHeight={["35px", "35px", "35px", "70px", "70px"]}
            color="white"
          >
            {title}
          </Heading>
          <Text
            textAlign="center"
            fontWeight={400}
            mt={4}
            color="#A4A4A4"
            fontSize={["14px", "14px", "14px", "20px", "20px"]}
            lineHeight={["24px", "24px", "24px", "36px", "36px"]}
            width={[, "100%", "100%", "80%", "80%", "80%"]}
          >
            {desc}
          </Text>
        </VStack>
        <Stack
          direction={["column", "column", "row", "row", "row"]}
          justify="center"
        >
          {children}
        </Stack>
      </Stack>
    </Box>
  );
};
