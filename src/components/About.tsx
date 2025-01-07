import { Flex, Image, Text, Box, Button } from "@chakra-ui/react";
import myPhoto from "../assets/me.jpeg";

const About = () => {
  return (
    <Flex
    id="about"
      py={{ base: "150px", md: "200px", lg: "290px" }}
      direction={{ base: "column", md: "row" }}
      justifySelf="center"
      justify="space-around"
      ml={{ base: "auto", xl: "373px" }}
      mr={{ base: "auto", xl: "132px" }}
      gap="86px"
      maxW={{ base: "774px", xl: "none" }}
    >
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Image
          alignSelf="flex-start"
          boxSize="224px"
          borderRadius="full"
          src={myPhoto}
          objectFit="cover"
        />
      </Box>
      <Box flex="2" maxW="464px">
        <Text
          fontSize="14px"
          lineHeight="20px"
          color="#A3A3A3"
          fontWeight="500"
          textTransform="uppercase"
        >
          (About Me)
        </Text>
        <Text
          lineHeight="28px"
          letterSpacing="0.18px"
          fontSize="18px"
          fontWeight="400"
        >
          I'm Desmond Egya, a full-stack developer passionate about building
          solutions that are as functional as they are impressive. When I'm not
          coding like a machine or brainstorming new app ideas, you'll find me
          leveling up in video games, experimenting with photography, or
          watching football because, let's face it, football is life. My
          development philosophy? Write clean code, solve real problems, and add
          a touch of creativity. I'm the developer you want on your team if
          you’re looking to hear users say, "This is exactly what I needed!"
        </Text>
        <Button
          mt="24px"
          borderRadius="full"
          bg="none"
          variant="outline"
          border="1px solid white"
        >
          Let's talk
        </Button>
      </Box>
    </Flex>
  );
};

export default About;
