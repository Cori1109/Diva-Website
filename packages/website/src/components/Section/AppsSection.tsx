import {
  Flex,
  Container,
  Heading,
  Stack,
  HStack,
  Text,
  Button,
  Icon,
  Image,
  IconProps,
  Box,
  Center,
  VStack,
  Link,
} from "@chakra-ui/react";
import { TbArrowUpRight } from "react-icons/tb";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ProductCard } from "../ProductCard";

export const AppSection = () => {
  return (
    <Stack pb={["10", "10", "10", "15", "15"]} justify={"flex-start"}>
      <Stack
        align="center"
        direction={["column", "column", "row", "row", "row"]}
      >
        <Link isExternal href="https://app.diva.finance/">
          <ProductCard
            imageSrc="/images/InsuranceImg.png"
            productName="DIVA App"
            productDesc="DIVA App is the first implementation of an app that uses DIVA Protocol as the underlying technology. It’s a universal app that allows its users to create, trade and settle derivative assets on anything."
          />
        </Link>
        <Center
          w={"320px"}
          bg="#101010"
          boxShadow={"2xl"}
          rounded={"xl"}
          h="410px"
        >
          <Box p="5">
            <Text
              color={"#A4A4A4"}
              mt={2}
              fontSize="24px"
              fontWeight="400"
              textAlign={"center"}
            >
              More Apps coming soon
            </Text>
          </Box>
        </Center>
      </Stack>
    </Stack>
  );
};
