import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
  Link,
  Badge,
  Image,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { TbArrowUpRight } from "react-icons/tb";

export const ProductCard = ({ imageSrc, productName, productDesc }) => {
  return (
    <VStack
      maxW={"320px"}
      bg="#101010"
      boxShadow={"2xl"}
      rounded={"xl"}
      p={6}
      spacing={5}
    >
      <Box alignSelf="flex-start">
        <Image
          boxSize="100px"
          objectFit="cover"
          src={imageSrc}
          alt="product image"
        />
      </Box>

      <HStack alignSelf="flex-start" justify="space-between" spacing={6}>
        <Box>
          <Heading fontWeight={700} color={"white"} fontSize={"22px"}>
            {productName}
          </Heading>
        </Box>

        <Icon as={TbArrowUpRight} w={8} h={8} color="white" />
      </HStack>

      <Text fontWeight={400} color="#a4a4a4">
        {productDesc}
      </Text>
    </VStack>
  );
};
