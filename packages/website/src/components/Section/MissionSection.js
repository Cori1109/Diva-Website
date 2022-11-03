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
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { Section } from "./Section";

export const MissionSection = () => {
  return (
    <Box pb={["10", "10", "10", "15", "15"]}>
      <Stack
        align="center"
        justify={"space-between"}
        direction={["column", "column", "row", "row", "row"]}
        pb={["5", "5", "5", "15", "15"]}
      >
        <Section
          title="Our Vision"
          desc="We envision a world where financial institutions are built on top 
          of open-source decentralized protocols and allow everyone with an internet 
          connection to access basic financial services in a permissionless way. 
          DIVA Protocol is our contribution to this new financial system. 
          It allows to create and settle derivative products including insurance, prediction and structured products in a highly flexible way. 
          We want to see derivatives being Powered by DIVA Protocol in this new paradigm."
          iconSrc="../images/Vision.png"
        />
      </Stack>
      <Stack
        direction={[
          "column",
          "column",
          "row-reverse",
          "row-reverse",
          "row-reverse",
        ]}
        align="center"
        justify="space-between"
      >
        <Section
          title="Our Mission"
          desc=" The DIVA DAO’s primary mission is to foster the adoption of DIVA
          Protocol by steering the treasury funds towards those projects and
          initiatives that are deemed to have the most positive impact on the
          future of DIVA Protocol. This includes providing grants to teams
          that are building tooling and infrastructure to simplify the
          developer experience of building on top of DIVA Protocol as well as
          teams that are building actual applications on top of DIVA Protocol
          such as prediction, insurance or structured product platforms."
          iconSrc="../images/Mission.png"
        />
      </Stack>
    </Box>
  );
};
