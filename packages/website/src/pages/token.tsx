import { Box } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import { TokenSection } from "../components/Section/TokenSection";

export default function token() {
  return (
    <Layout>
      <Box px={["20px", "30px", "50px", "65px", "80px"]}>
        <TokenSection />
      </Box>
    </Layout>
  );
}
