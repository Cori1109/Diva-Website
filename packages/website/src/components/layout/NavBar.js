import React from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  color,
  Icon,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

export const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Link _hover={"none"} label="Home" href="/">
        <Box>
          <Image src="../DIVALogo.png" alt="DivaLogo" />
        </Box>
      </Link>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link
      _hover={{
        bgGradient: "linear-gradient(89.74deg, #00C2FF 0.17%, #0038FF 152.06%)",
        bgClip: "text",
      }}
      href={to}
    >
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        align="center"
        spacing={4}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home </MenuItem>
        <MenuItem to="/about">About </MenuItem>
        <MenuItem to="/dapps">dApps </MenuItem>
        <MenuItem to="/rewards">Rewards </MenuItem>
        <MenuItem to="https://docs.divaprotocol.io/">Docs </MenuItem>
        <MenuItem to="/token">Token </MenuItem>
        <MenuItem to="/posts">Blog </MenuItem>

        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                rightIcon={<ChevronDownIcon boxSize={"1rem"} color={"white"} />}
                bg="transparent"
                _hover={{
                  bgGradient:
                    "linear-gradient(89.74deg, #00C2FF 0.17%, #0038FF 152.06%)",
                  bgClip: "text",
                }}
                _active={{
                  bgGradient:
                    "linear-gradient(89.74deg, #00C2FF 0.17%, #0038FF 152.06%)",
                  bgClip: "text",
                }}
                p={0}
                fontWeight={"500"}
              >
                Community
              </MenuButton>
              <MenuList
                minWidth="100px"
                border={"none"}
                alignContent={"center"}
                bg="#1e1d1d"
                _hover={"none"}
              >
                <MenuItem to="https://discord.gg/DE5b8ZeJjK">
                  <Button
                    _hover={{
                      color: "white",
                      bg: "transparent",
                    }}
                    _active={{
                      color: "white",
                      bg: "transparent",
                    }}
                    leftIcon={<FaDiscord />}
                    variant={"ghost"}
                    size="lg"
                  >
                    Discord
                  </Button>
                </MenuItem>

                <MenuItem to="https://twitter.com/divaprotocol_io">
                  <Button
                    _hover={{
                      color: "white",
                      bg: "transparent",
                    }}
                    _active={{
                      color: "white",
                      bg: "transparent",
                    }}
                    leftIcon={<FaTwitter />}
                    variant={"ghost"}
                    size="lg"
                  >
                    Twitter
                  </Button>{" "}
                </MenuItem>

                {/*<MenuItem to="/">
                  <Button
                    _hover={{
                      color: "white",
                      bg: "transparent",
                    }}
                    _active={{
                      color: "white",
                      bg: "transparent",
                    }}
                    leftIcon={<FaGithub />}
                    variant={"ghost"}
                    size="lg"
                  >
                    Github
                  </Button>{" "}
                </MenuItem>*/}
              </MenuList>
            </>
          )}
        </Menu>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      zIndex="2"
      as="nav"
      position={"relative"}
      align="center"
      justify="space-between"
      wrap="wrap"
      w="93%"
      mx="auto"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};
