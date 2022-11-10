import {
  Stack,
  Flex,
  Box,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import { Post } from "../../pages";
import BlogMeta from "./BlogMeta";

const FeaturedBlogPost = ({ post }: { post: Post }) => {
  return (
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Box>
          <Button
            size={"md"}
            variant="outline"
            px={6}
            color="#3393E0"
            colorScheme="linear-gradient(270deg, #00C2FF 0%, #0038FF 100%)"
          >
            Featured Blog Post
          </Button>
        </Box>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "20px", sm: "30px", lg: "40px" }}
          color="white"
        >
          {" "}
          {post.title}
        </Heading>
        <BlogMeta author={post.author} publishedAt={post.date} />
      </Stack>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <Image
          alt={"Hero Image"}
          align={"center"}
          w={"100%"}
          h={"100%"}
          src={`/images/posts/${post.coverImage}`}
        />
      </Flex>
    </Stack>
  );
};

export default FeaturedBlogPost;
