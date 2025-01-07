import { Box, Flex, HStack, Stack, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // Ensures the time is in 12-hour format with AM/PM
      });
      setTime(currentTime);
    }, 1000); // Update time every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <Box mt={{ base: "116px", md: "200px", lg: "253px" }} mb="15px">
      <Link href="#home">
        <HStack justify="flex-end">
          <FaArrowCircleUp color="#AAAAAA" size="26px" />
          <FaArrowCircleUp color="#AAAAAA" size="26px" />
        </HStack>
      </Link>
      <Flex align="flex-end" justify="space-between" mt="18px">
        <HStack gap="32px">
          <Text>© {new Date().getFullYear()} </Text>
          <Text>{time}</Text>
        </HStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: "4px", md: "30px", lg: "52px" }}
        >
          <Link
            href="https://www.linkedin.com/in/your-username/"
            target="_blank"
          >
            LINKEDIN
          </Link>
          <Link href="https://x.com/DesmondEgya" target="_blank">
            X/TWITTER
          </Link>
          <Link href="https://instagram.com/desmond_egya" target="_blank">
            INSTAGRAM
          </Link>
          <Link href="https://github.com/desegya" target="_blank">
            GITHUB
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
