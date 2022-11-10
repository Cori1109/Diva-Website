import {
  Flex,
  Heading,
  Stack,
  HStack,
  Text,
  Icon,
  Image,
  IconProps,
  Box,
  VStack,
  Avatar,
  Wrap,
  Link,
  Button,
} from "@chakra-ui/react";

export const NetworkSection = () => {
  return (
    <Stack
      pt={["10", "10", "10", "20", "20"]}
      spacing={["10", "10", "10", "20", "20"]}
      textAlign={"center"}
      pb={["10", "10", "10", "20", "20"]}
    >
      <Box>
        <Heading
          fontWeight={700}
          fontSize={["30px", "30px", "30px", "60px", "60px"]}
          color="white"
        >
          Supported Networks
        </Heading>
      </Box>
      <Wrap
        justify={"center"}
        align="center"
        spacing={"20"}
        direction={["column", "column", "column", "row", "row"]}
      >
        <Image src="../images/eth-logo.png" alt="EthereumImg" />
        <Image src="../images/polygon-logo.png" alt="polygonlogo" />
        <Image src="../images/Arbitrum-logo.png" alt="Arbitrumlogo" />
      </Wrap>
    </Stack>
  );
};
