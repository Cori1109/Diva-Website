import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import BlogMeta from "./BlogMeta";

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

const BlogHeader = () => {
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
          How DIVA Protocol can help unlock affordable insurance for farmers
        </Heading>
        <BlogMeta
          coverImageAlt="DIVA quiz"
          authors={authors}
          publishedAt=" July 29, 2022"
        />
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
          src={"/images/Blog.png"}
        />
      </Flex>
    </Stack>
  );
};

export default BlogHeader;
