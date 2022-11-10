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
} from "@chakra-ui/react";

export const TeamSection = () => {
  return (
    <Flex py={12} align={"center"} direction="column">
      <VStack
        spacing={["5", "5", "5", "10", "10"]}
        textAlign={"center"}
        align={"center"}
      >
        <Heading
          fontWeight={700}
          color={"white"}
          fontSize={["3xl", "3xl", "3xl", "6xl", "6xl"]}
          lineHeight={"110%"}
        >
          Genesis Team
        </Heading>
        <Text
          color={"#A4A4A4"}
          maxW={"3xl"}
          fontWeight={400}
          fontSize={["sm", "sm", "sm", "xl", "xl"]}
        >
          The team that planted the seeds.
        </Text>
      </VStack>

      <Wrap
        mt={["null", "null", "null", "10", "10"]}
        justify={"center"}
        align="center"
        spacing="4rem"
        width={"70%"}
        py={{ base: 20, md: 18 }}
        direction={["row", "row", "row", "row", "row"]}
      >
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/wlad.png"
            alt="Wlad"
          />
          <Text color={"#A4A4A4"} pt="5">
            Wlad
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/sascha.png"
            alt="sascha"
          />
          <Text color={"#A4A4A4"} pt="5">
            Sascha
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/julian.png"
            alt="julian"
          />
          <Text color={"#A4A4A4"} pt="5">
            Julian
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/richard.png"
            alt="richard"
          />
          <Text color={"#A4A4A4"} pt="5">
            Richard
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/tarun.png"
            alt="tarun"
          />
          <Text color={"#A4A4A4"} pt="5">
            Tarun
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/harsh.png"
            alt="harsh"
          />
          <Text color={"#A4A4A4"} pt="5">
            Harsh
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/sambit.png"
            alt="sambit"
          />
          <Text color={"#A4A4A4"} pt="5">
            Sambit
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/kerry.png"
            alt="kerry"
          />
          <Text color={"#A4A4A4"} pt="5">
            Kerry
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/ayaz.png"
            alt="ayaz"
          />
          <Text color={"#A4A4A4"} pt="5">
            Ayaz
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/ashis.png"
            alt="ashis"
          />
          <Text color={"#A4A4A4"} pt="5">
            Ashis
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/alex.png"
            alt="Aleksandar"
          />
          <Text color={"#A4A4A4"} pt="5">
            Aleksandar
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/sahil.png"
            alt="sahil"
          />
          <Text color={"#A4A4A4"} pt="5">
            Sahil
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/manvir.png"
            alt="manvir"
          />
          <Text color={"#A4A4A4"} pt="5">
            Manvir
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/evan.png"
            alt="evan"
          />
          <Text color={"#A4A4A4"} pt="5">
            Evan
          </Text>
        </Box>
        <Box>
          <Image
            borderRadius="full"
            boxSize={["60px", "60px", "60px", "120px", "120px"]}
            src="../DIVATeam/precious.png"
            alt="precious"
          />
          <Text color={"#A4A4A4"} pt="5">
            Precious
          </Text>
        </Box>
      </Wrap>
    </Flex>
  );
};
