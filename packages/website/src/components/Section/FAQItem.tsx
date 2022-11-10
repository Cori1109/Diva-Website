import React from "react";
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const FAQItem = ({ title, body }) => (
  <AccordionItem
    bgGradient={"linear(to-r, #303030 0%, #1B1B1B 100%)"}
    borderRadius="16px"
    border={"none"}
    px={5}
    py="2"
    my="10"
    w="60%"
  >
    {({ isExpanded }) => (
      <>
        <AccordionButton>
          <Box
            flex="1"
            textAlign="left"
            fontWeight={["350", "350", "350", "700", "700"]}
            fontSize={["22px", "22px", "30px", "30px", "30px"]}
            color="white"
          >
            {title}
          </Box>
          {isExpanded ? (
            <MinusIcon color="white" fontSize="12px" />
          ) : (
            <AddIcon color="white" fontSize="12px" />
          )}
        </AccordionButton>
        <AccordionPanel
          fontSize={["18px", "18px", "24px", "24px", "24px"]}
          color="#A4A4A4"
          textAlign="left"
        >
          {body}
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
);

export default FAQItem;
