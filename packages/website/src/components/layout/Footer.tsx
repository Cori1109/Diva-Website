import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  HStack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  Image,
  Flex,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { logo } from "../../../public/images/DivaLogo";

const Logo = (props) => {
  return (
    <Box>
      <Image src="../DIVALogo.png" alt="DivaLogo" />
    </Box>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={"whiteAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      _hover={{
        bg: "whiteAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box bg="#1E1D1D" color="white">
      <Box py={10} px={10}>
        <Stack maxW={"6xl"} mx="auto">
          <SimpleGrid columns={[1, 4, 4, 4, 4]} spacing="8">
            <Stack>
              <Box>
                <Logo color={"white"} />
              </Box>
            </Stack>
            <Stack
              mx={["none", "none", "none", "auto", "auto"]}
              align={"flex-start"}
            >
              <Link href={"/about"}>
                About Us
              </Link>
              <Link
                isExternal
                href={"https://docs.divaprotocol.io/"}
              >
                Docs
              </Link>
              <Link href={"/token"}>
                Token
              </Link>
              <Link href={"/posts"}>
                Blog
              </Link>
            </Stack>
            <Stack
              mx={["none", "none", "none", "auto", "auto"]}
              align={"flex-start"}
            >
              {/*<Link href={"#"}>Whitepaper</Link>*/}
              <Link
                isExternal
                href={"https://docs.divaprotocol.io/"}
              >
                DIVA Slide Deck
              </Link>
              <Link
                isExternal
                href={
                  "https://docs.divaprotocol.io/for-developers/technical-resources"
                }
              >
                Pecksheild Audit
              </Link>
            </Stack>
            <Stack
              align={["flex-start", "flex-start", "center", "center", "center"]}
            >
              <Stack direction={"row"} spacing={2}>
                <SocialButton
                  label={"Twitter"}
                  href={"https://twitter.com/divaprotocol_io"}
                >
                  <FaTwitter />
                </SocialButton>
                {/*<SocialButton label={"Github"} href={""}>
                <FaGithub />
              </SocialButton>*/}
                <SocialButton
                  label={"Discord"}
                  href={"https://discord.gg/DE5b8ZeJjK"}
                >
                  <FaDiscord />
                </SocialButton>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Box>
      <Flex justifyContent="center" bg="#161616" py={5}>
        <Stack
          align="center"
          direction={["column", "column", "row", "row", "row"]}
        >
          {/*<Link href={"#"}>Privacy Policy</Link>*/}
          <Link href={"#"}>©DIVA Protocol</Link>
          {/*<Link href={"#"}>Terms & Conditions</Link>*/}
        </Stack>
      </Flex>
    </Box>
  );
};
