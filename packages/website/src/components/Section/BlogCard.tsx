import React from "react";
import {
  Wrap,
  VStack,
  Heading,
  Text,
  Image,
  Box,
  WrapItem,
} from "@chakra-ui/react";
import BlogMeta from "./BlogMeta";

const BlogCard = ({
  title,
  coverImage,
  coverImageAlt,
  author,
  publishedAt,
}: {
  title: string;
  coverImage: string;
  coverImageAlt: string;
  author: string;
  publishedAt: string;
}) => {
  return (
    <VStack spacing="6" cursor="pointer" align="flex-start" borderRadius={8}>
      <Image
        src={`images/posts/${coverImage}`}
        width="full"
        alt={coverImageAlt}
      />
      <Wrap spacing="16px" direction="column" px={4}>
        <Heading
          fontSize="22px"
          fontWeight="bold"
          color="white"
          _hover={{ textDecoration: "underline" }}
        >
          {title}
        </Heading>
        <BlogMeta author={author} publishedAt={publishedAt} />
      </Wrap>
    </VStack>
  );
};

export default BlogCard;
