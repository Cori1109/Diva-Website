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

import { TbArrowUpRight } from "react-icons/tb";

export const PartnerSection = () => {
  return (
    <Box
      pt={["10", "10", "10", "20", "20"]}
      pb={["10", "10", "10", "20", "20"]}
      justifyContent="center"
      alignContent={"center"}
    >
      <Stack
        py={12}
        mx="auto"
        width={["auto", "auto", "auto", "90%", "90%"]}
        textAlign="center"
        backdropFilter="blur(25px)"
        borderRadius="20px"
        border="1px solid rgba(51, 147, 224, 1)"
        shadow="inset -2px -2px 100px rgba(255, 255, 255, 0.1), inset 2px 2px 100px rgba(66, 66, 66, 0.1)"
        background="linear-gradient(247.52deg, rgba(0, 56, 255, 0.16) 1.52%, rgba(255, 255, 255, 0) 96.99%)"
      >
        <Heading
          color="white"
          fontWeight={700}
          fontSize={["30px", "30px", "30px", "60px", "60px"]}
          lineHeight={["35px", "35px", "35px", "70px", "70px"]}
          pb="12"
        >
          Our Partners
        </Heading>

        <Wrap justify="center" align="center" spacing="20" direction="row">
          <Image
            opacity={"60%"}
            src="../images/dwflabs.png"
            alt="PartnerLogo"
          />
          <Image opacity={"60%"} src="../images/darley.png" alt="PartnerLogo" />
        </Wrap>
      </Stack>
    </Box>
  );
};
