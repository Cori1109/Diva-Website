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
  VStack,
  Link,
} from "@chakra-ui/react";
import { TbArrowUpRight } from "react-icons/tb";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ProductCard } from "../ProductCard";

export const ProductSection = () => {
  return (
    <Stack
      position={"relative"}
      top={["auto", "auto", "-100px", "-100px", "-100px"]}
      align={"center"}
      justify="center"
    >
      <VStack spacing={"20px"} textAlign={"center"} align={"center"}>
        <Heading
          fontWeight={700}
          fontSize={["30px", "30px", "60px", "60px", "60px"]}
          color={"white"}
        >
          DIVA Protocol Powered Products{" "}
        </Heading>
        <Text
          color={"#A4A4A4"}
          maxW={"4xl"}
          fontWeight={400}
          fontSize={["sm", "sm", "xl", "xl", "xl"]}
          lineHeight={["none", "none", "6", "6", "6"]}
        >
          Products that you can build on top of DIVA Protocol. <br />
          No smart contract programming skills required.
        </Text>
      </VStack>
      <Flex justify={"center"} minWidth="360px" minHeight="320px">
        <Stack
          spacing={"24"}
          align="center"
          justify={"center"}
          py="60px"
          direction={["column", "column", "column", "column", "row"]}
        >
          <Link
            href=" https://docs.divaprotocol.io/use-cases/overview"
            isExternal
          >
            <ProductCard
              imageSrc="/images/InsuranceImg.png"
              productName="Insurance Products"
              productDesc="Derivatives with payouts linked to insurance loss events such as
          natural disasters, credit default, DeFi hacks, or medical claim costs"
            />
          </Link>
          <Link
            href=" https://docs.divaprotocol.io/use-cases/overview"
            isExternal
          >
            <ProductCard
              imageSrc="/images/StructuredImg.png"
              productName="Structured Products"
              productDesc="Derivatives mirroring the payoff curve of barrier reverse convertibles and other popular structured products"
            />
          </Link>
          <Link
            href=" https://docs.divaprotocol.io/use-cases/overview"
            isExternal
          >
            <ProductCard
              imageSrc="/images/PredictionImg.png"
              productName="Prediction Products"
              productDesc="Derivatives with binary or linear payoffs that are linked to the outcome of sport, political or economic events"
            />
          </Link>
        </Stack>
      </Flex>
      <Box>
        <Link
          href=" https://docs.divaprotocol.io/use-cases/overview"
          isExternal
        >
          <Button
            textAlign={"center"}
            color="#00C2FF"
            rightIcon={<TbArrowUpRight />}
            borderColor="{Linear Gradient rgba(0, 194, 255, 1) rgba(0, 56, 255, 1)}"
            variant="outline"
            size="lg"
            width="200px"
            fontFamily={"body"}
            fontSize="16px"
            fontWeight={"500"}
          >
            LEARN MORE
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};
