import React from "react";
import { Box, Flex, Accordion } from "@chakra-ui/react";
import FAQItem from "./FAQItem";
import { faqData } from "./faqData";

const FAQContent = () => (
  <Accordion allowToggle defaultIndex={[0]}>
    {faqData.map((faq, index) => (
      <FAQItem title={faq.title} body={faq.body} key={index} />
    ))}
  </Accordion>
);

export default FAQContent;
