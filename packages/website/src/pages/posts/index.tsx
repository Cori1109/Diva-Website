
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { getAllPosts } from "../api/getPosts";
import Layout from "../../components/layout/Layout";
import BlogCard from "../../components/Section/BlogCard";
import FeaturedBlogPost from "../../components/Section/FeaturedBlogPost";
import { Post } from "..";
import Link from "next/link";
import { format } from "date-fns";

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts
        .sort((a, b) => {
          return b.date.getTime() - a.date.getTime();
        })
        .map((post) => ({
          ...post,
          date: format(post.date, "MMMM dd, yyyy"),
        })),
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
