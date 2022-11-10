import {
  Box,
  Button,
  Link,
} from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import { CTASection } from "../components/Section/CTASection";
import { StoreSection } from "../components/Section/StoreSection";
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
          desc="DIVA Protocol is a smart contract based operating system that was developed to empower web2 developers to build unique derivative applications 
          such as insurance, prediction markets, structured product as well as conditional donations without the need to connect to any traditional banking infrastructure. 
          We built the smart contracts, you build the best user experiences. Need some inspiration? Check out our docs."
        >
          <>
            <Link
              isExternal
              href="https://docs.divaprotocol.io/for-developers/overview"
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
          </>
        </CTASection>
      </Box>
    </Layout>
  );
}
