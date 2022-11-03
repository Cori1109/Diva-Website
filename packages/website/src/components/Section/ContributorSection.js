import {
  Flex,
  Container,
  Heading,
  Stack,
  HStack,
  Text,
  Button,
  Icon,
  Image,
  IconProps,
  Box,
  VStack,
  Avatar,
  Wrap,
  Link,
} from "@chakra-ui/react";

export const ContributorSection = () => {
  return (
    <Box px={10} py={12}>
      <Flex direction="column">
        <VStack spacing="10" textAlign={"center"} align={"center"}>
          <Heading
            fontWeight={700}
            color={"white"}
            fontSize={["3xl", "3xl", "3xl", "6xl", "6xl"]}
            lineHeight={"110%"}
          >
            Top Contributors
          </Heading>
          <Text
            color={"#A4A4A4"}
            maxW={"3xl"}
            fontWeight={400}
            fontSize={["sm", "sm", "sm", "xl", "xl"]}
          >
            Top contributors 2022 voted by the DIVA DAO.{" "}
            <Link color={"#3393E0"}>Learn </Link> how you can contribute to the
            ecosystem and get rewarded.
          </Text>
        </VStack>
        <Wrap
          justify="center"
          align="center"
          mt={["null", "null", "null", "10", "10"]}
        >
          <Wrap
            justify="center"
            align="center"
            spacing="10"
            py={{ base: 20, md: 18 }}
            direction={["row", "row", "row", "row", "row"]}
          >
            <Box justify="center" align="center">
              <Image
                borderRadius="full"
                boxSize={["60px", "60px", "60px", "120px", "120px"]}
                src="../images/Team.png"
                alt="TeamImg"
              />
              <Text color={"#A4A4A4"} pt="5">
                Member Name
              </Text>
            </Box>
            <Box justify="center" align="center">
              <Image
                borderRadius="full"
                boxSize={["60px", "60px", "60px", "120px", "120px"]}
                src="../images/Team.png"
                alt="TeamImg"
              />
              <Text color={"#A4A4A4"} pt="5">
                Member Name
              </Text>
            </Box>
            <Box justify="center" align="center">
              <Image
                borderRadius="full"
                boxSize={["60px", "60px", "60px", "120px", "120px"]}
                src="../images/Team.png"
                alt="TeamImg"
              />
              <Text color={"#A4A4A4"} pt="5">
                Member Name
              </Text>
            </Box>
          </Wrap>
        </Wrap>
      </Flex>
    </Box>
  );
};
