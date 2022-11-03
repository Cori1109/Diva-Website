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
import { MissionSection } from "../components/Section/MissionSection";
import { TeamSection } from "../components/Section/TeamSection";
import { ContributorSection } from "../components/Section/ContributorSection";
import { CTASection } from "../components/Section/CTASection";

import { TbArrowUpRight } from "react-icons/tb";

export default function About() {
  return (
    <Layout>
      <Box px={["20px", "30px", "50px", "65px", "80px"]} w="100%">
        <MissionSection />
        <TeamSection />
        {/*<ContributorSection />*/}
        <CTASection
          title="BUIDL"
          desc="DIVA Protocol is a smart contract that takes care of all the logic used to create and settle derivative assets. As a Web2 developer, you do not need to have any knowledge of writing smart contracts in Solidity. You can fully focus on building the best user experiences for creating and settling insurance, prediction or structured products."
        >
          <Stack
            direction={["column", "column", "row", "row", "row"]}
            justify="center"
            align={"center"}
            spacing={6}
          >
            <Link
              _hover={"none"}
              isExternal
              href="https://docs.divaprotocol.io/"
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
                color="#00C2FF"
                borderColor="{Linear Gradient rgba(0, 194, 255, 1) rgba(0, 56, 255, 1)}"
                variant="outline"
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
        </CTASection>
      </Box>
    </Layout>
  );
}
