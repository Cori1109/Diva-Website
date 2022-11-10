import {
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

export const StoreSection = () => {
  return (
    <Box py={12}>
      <Stack
        align="center"
        justify={"space-between"}
        direction={["column", "column", "row", "row", "row"]}
      >
        <Section
          title="dApp Store"
          desc=" Explore apps built with DIVA Protocol. Learn how you can
          start building apps on top of DIVA Protocol yourself and get them featured in our app store."
          iconSrc="../images/Puzzle.png"
        />
      </Stack>
    </Box>
  );
};
