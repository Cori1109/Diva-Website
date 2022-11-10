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
import { TokenSection } from "../components/Section/TokenSection";

export default function token() {
  return (
    <Layout>
      <Box px={["20px", "30px", "50px", "65px", "80px"]}>
        <TokenSection />
      </Box>
    </Layout>
  );
}
