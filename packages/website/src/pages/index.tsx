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
} from "@chakra-ui/react";
import { NavBar } from "../components/layout/NavBar";
import { HeroSection } from "../components/Section/HeroSection";
import { ProductSection } from "../components/Section/ProductSection";
import Layout from "../components/layout/Layout";
import { FeatureSection } from "../components/Section/FeatureSection";
import { PartnerSection } from "../components/Section/PartnerSection";
import { NetworkSection } from "../components/Section/NetworkSection";
import FAQSection from "../components/Section/FAQSection";
import { WorkSection } from "../components/Section/WorkSection";
import { SocialMediaSection } from "../components/Section/SocialMediaSection";

export type Post = {
  author: string;
  content: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  coverImage: string;
  coverImageDescription: string;
  coverImageWidth: number;
  coverImageHeight: number;
  excerpt: string;
  featured?: boolean;
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>DIVA Protocol</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <HeroSection />
      <Box px={["20px", "30px", "50px", "65px", "80px"]} w="100%">
        <ProductSection />
        <FeatureSection />
        <WorkSection />
        <PartnerSection />
        <NetworkSection />
        <FAQSection />
        <SocialMediaSection />
      </Box>
    </Layout>
  );
}
