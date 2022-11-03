import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      bg="#000000"
      minHeight="100vh"
    >
      <NavBar />
      {children}
      <Footer />
    </Flex>
  );
};

export default Layout;
