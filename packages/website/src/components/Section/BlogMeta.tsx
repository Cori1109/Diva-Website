import {
  Stack,
  HStack,
  VStack,
  Heading,
  Text,
  Image,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";


const BlogMeta = ({
  author,
  publishedAt,
}: {
  author: string;
  publishedAt: string;
}) => {
  return (
    <VStack align="flex-start" pb={6}>
      <Stack direction="row">
        <AvatarGroup size="sm" max={3}>
          <Avatar
            name={author}
            //src={author.avatarUrl}
          />
        </AvatarGroup>
        <VStack color="#A4A4A4" align="flex-start" spacing={0}>
          <HStack>
            <Heading fontSize="md" fontWeight="semibold">
              {author}
            </Heading>
          </HStack>
          <Text fontSize="md" fontWeight="normal">
            {`${publishedAt}`}
          </Text>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default BlogMeta;
