import Head from "next/head";
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Link,
  Image,
  List,
  Stack,
} from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import { Footer } from "../components/layout/Footer";
import { CTASection } from "../components/Section/CTASection";
import { StoreSection } from "../components/Section/StoreSection";
import { ProductCard } from "../components/ProductCard";
import { AppSection } from "../components/Section/AppsSection";
import { TbArrowUpRight } from "react-icons/tb";

export default function dApps() {
  return (
    <Layout>
      <Box px={["20px", "30px", "50px", "65px", "80px"]} w="100%">
        <StoreSection />
        <AppSection />

        <CTASection
          title="BUIDL"
          desc="DIVA Protocol is a smart contract that takes care of all the logic used to create and settle derivative assets. As a Web2 developer, you do not need to have any knowledge of writing smart contracts in Solidity. You can fully focus on building the best user experiences for creating and settling insurance, prediction or structured products."
        >
          <>
            <Link
              _hover={"none"}
              isExternal
              href="https://docs.divaprotocol.io/for-developers/overview"
            >
              <Button
                textAlign={"center"}
                color="#00C2FF"
                rightIcon={<TbArrowUpRight />}
                borderColor="{Linear Gradient rgba(0, 194, 255, 1) rgba(0, 56, 255, 1)}"
                variant="outline"
                _hover="none"
                size="lg"
                width="200px"
                fontFamily={"body"}
                fontSize="16px"
                fontWeight={"500"}
              >
                LEARN MORE
              </Button>
            </Link>
          </>
        </CTASection>
      </Box>
    </Layout>
  );
}
