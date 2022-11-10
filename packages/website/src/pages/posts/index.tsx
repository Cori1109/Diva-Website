import Head from "next/head";

import {
  Box,
  Flex,
  Wrap,
  Button,
  Heading,
  Text,
  Image,
  List,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { getAllPosts, getAllSlugs } from "../api/getPosts";
import Layout from "../../components/layout/Layout";
import BlogCard from "../../components/Section/BlogCard";
import FeaturedBlogPost from "../../components/Section/FeaturedBlogPost";
import { Post } from "..";
import Link from "next/link";


export const getStaticProps = async () => {
  const posts = await getAllPosts();

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

export default function Blog({ posts }: { posts: Post[] }) {
  const featured = posts.find((v) => v.featured === true);
  return (
    <Layout>
      <Box
        px={["20px", "30px", "50px", "65px", "80px"]}
        justifyContent="center"
        w="100%"
      >
        {featured != null && <FeaturedBlogPost post={featured} />}
        <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing="2rem">
          {posts?.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} passHref>
              <a>
                <BlogCard
                  coverImageAlt={post.coverImageDescription}
                  title={post.title}
                  coverImage={post.coverImage}
                  author={post.author}
                  publishedAt={post.date}
                />
              </a>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
}
