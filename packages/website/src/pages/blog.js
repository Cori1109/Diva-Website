import Head from "next/head";

import {
  Box,
  Flex,
  Wrap,
  Button,
  Heading,
  Text,
  Link,
  Image,
  List,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import { Footer } from "../components/layout/Footer";
import BlogCard from "../components/Section/BlogCard";
import BlogHeader from "../components/Section/BlogHeader";

const authors = [
  {
    name: "sahilkumar.eth",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1267127469783478272/AtqUtMCj_400x400.jpg",
  },
  {
    name: "Walodja1987",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1362898050633654275/M7BEnFv6_400x400.jpg",
  },
];

export default function Blog() {
  return (
    <Layout>
      <Box
        px={["20px", "30px", "50px", "65px", "80px"]}
        justifyContent="center"
        w="100%"
      >
        <BlogHeader />
        <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing="2rem">
          <BlogCard
            title="Incentivized DIVA quiz"
            coverImage="/images/quiz.png"
            coverImageAlt="DIVA quiz"
            authors={authors}
            publishedAt=" July 29, 2022"
          />
          <BlogCard
            title="How DIVA Protocol can help unlock affordable insurance for farmers"
            coverImage="/BlogCI/diva-farmers.png"
            coverImageAlt="diva-farmers"
            authors={authors}
            publishedAt="July 25, 2022"
          />
          <BlogCard
            title="DIVA Team at Solana Hacker House"
            coverImage="/BlogCI/team-diva.png"
            coverImageAlt="team-diva"
            authors={authors}
            publishedAt=" July 29, 2022"
          />
          <BlogCard
            title="DIVA App Testnet Receives Overwhelming Participation"
            coverImage="/BlogCI/diva-cover.png"
            coverImageAlt="DIVA quiz"
            authors={authors}
            publishedAt=" July 29, 2022"
          />
          {/*<BlogCard
            title="Incentivized DIVA quiz"
            coverImage="/images/quiz.png"
            coverImageAlt="DIVA quiz"
            authors={authors}
            publishedAt=" July 29, 2022"
          />
          <BlogCard
            title="Incentivized DIVA quiz"
            coverImage="/images/quiz.png"
            coverImageAlt="DIVA quiz"
            authors={authors}
            publishedAt=" July 29, 2022"
          />*/}
        </SimpleGrid>
      </Box>
    </Layout>
  );
}
