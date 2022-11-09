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
import { format, parseISO } from "date-fns";
import { getAllPosts, getAllSlugs } from "../../pages/api/getPosts";
import Layout from "../../components/layout/Layout";
import { Footer } from "../../components/layout/Footer";
import BlogCard from "../../components/Section/BlogCard";
import BlogHeader from "../../components/Section/BlogHeader";

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  console.log("posts:", posts);

  return {
    props: {
      posts: posts
        .map((post) => ({
          ...post,
          date: post.date.toISOString(),
        }))
        .sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }),
    },
  };
};

export default function Blog({ posts }) {
  return (
    <Layout>
      <Box
        px={["20px", "30px", "50px", "65px", "80px"]}
        justifyContent="center"
        w="100%"
      >
        <BlogHeader />
        <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing="2rem">
          {posts?.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
              <BlogCard
                title={post.title}
                coverImage={post.coverImage}
                author={post.author}
                publishedAt={post.date}
              />
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
}
