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

const BlogMeta = ({ authors, publishedAt }) => {
  return (
    <VStack align="flex-start" pb={6}>
      <Stack direction="row" max={1}>
        <AvatarGroup size="sm" max={3}>
          {authors?.map((author) => (
            <Avatar
              key={author.name}
              name={author.name}
              src={author.avatarUrl}
            />
          ))}
        </AvatarGroup>
        <VStack noOfLines={"2"} color="#A4A4A4" align="flex-start" spacing={0}>
          <HStack>
            {authors?.length === 1 ? (
              <Heading key={author.name} fontSize="md" fontWeight="semibold">
                {author.name}
              </Heading>
            ) : (
              authors?.map((author) => (
                <Heading key={author.name} fontSize="md" fontWeight="semibold">
                  {author.name}
                </Heading>
              ))
            )}
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
