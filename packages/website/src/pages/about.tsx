import { Box, Button, Link, Stack } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import { MissionSection } from "../components/Section/MissionSection";
import { TeamSection } from "../components/Section/TeamSection";
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
          desc="DIVA Protocol is a smart contract based operating system that was developed to empower web2 developers to build unique derivative applications 
          such as insurance, prediction markets, structured product as well as conditional donations without the need to connect to any traditional banking infrastructure. 
          We built the smart contracts, you build the best user experiences. Need some inspiration? Check out our docs."
        >
          <Stack
            direction={["column", "column", "row", "row", "row"]}
            justify="center"
            align={"center"}
            spacing={6}
          >
            <Link
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
            <Link href="/dapps">
              <Button
                textAlign={"center"}
                color="#00C2FF"
                borderColor="{Linear Gradient rgba(0, 194, 255, 1) rgba(0, 56, 255, 1)}"
                variant="outline"
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
