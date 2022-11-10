import React from "react";
import { Box, Flex, Heading, Image, Text, Stack } from "@chakra-ui/react";
import FAQContent from "./FAQContent";

const FAQSection = () => {
  return (
    <Box>
      <Stack
        pt={["10", "10", "10", "20", "20"]}
        spacing={"10"}
        pb={["10", "10", "10", "20", "20"]}
      >
        <Box>
          <Heading
            fontWeight={"700"}
            color={"white"}
            fontSize={["3xl", "3xl", "3xl", "6xl", "6xl"]}
            textAlign="center"
          >
            Frequently Asked Questions
          </Heading>
        </Box>
        <FAQContent />
      </Stack>
    </Box>
  );
};

export default FAQSection;
