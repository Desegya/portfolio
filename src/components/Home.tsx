import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { FaArrowCircleDown } from "react-icons/fa";

const Home = () => {
  return (
    <Flex
      id="home"
      flexDirection="column"
      justify="space-between"
      paddingTop="30px"
      height="80vh"
    >
      <Box>
        <Text
          fontWeight="500"
          maxW="870px"
          paddingTop="32px"
          fontSize={{ base: "53px", md: "100px", lg: "144px" }}
          lineHeight={{ base: "51px", md: "103px", lg: "130px" }}
          color="#A3A3A3"
        >
          FULL STACK <br />{" "}
          <Text as="span" display="block" ml={{ base: "10px", lg: "50px" }}>
            DEVELOPER
          </Text>
          <Text
            fontSize="16px"
            lineHeight="22px"
            textAlign="right"
            color="#FFFFFF"
          >
            BASED IN NIGERIA
          </Text>
        </Text>
      </Box>
      <Box textAlign="right">
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          paddingBottom="20px"
          textTransform="uppercase"
          lineHeight="22px"
          color="#FFFFFF"
        >
          Available for full time & freelance
        </Text>
        <Link href="#projects">
          <HStack justify="flex-end">
            <FaArrowCircleDown color="#AAAAAA" size="26px" />
            <FaArrowCircleDown color="#AAAAAA" size="26px" />
          </HStack>
        </Link>
      </Box>
    </Flex>
  );
};

export default Home;
