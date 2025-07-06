import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { RiLinkM } from "react-icons/ri";
import eventlight from "../assets/eventlight.png";
import atpb from "../assets/atpb.png";
import gamehub from "../assets/gamehub.png";

const Projects = () => {
  return (
    <Box
      id="projects"
      pt="135px"
      justifySelf="center"
      maxW="1100px"
      px={{ base: "20px", md: 4 }}
    >
      <Heading
        textAlign="center"
        color="#A3A3A3"
        textTransform="uppercase"
        fontSize={{ base: "29px", md: "48px" }}
        fontWeight="700"
        lineHeight="48px"
        paddingBottom="60px"
      >
        My Projects
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        my={8}
        gap={6}
      >
        {/* Image Section */}
        <Box flex="1">
          <Image
            src={gamehub}
            alt="Project Thumbnail"
            borderRadius="lg"
            objectFit="cover"
            w="100%"
          />
        </Box>

        {/* Text Section */}
        <Box flex="1">
          <Stack spacing={4}>
            <HStack>
              {/* <Button
                borderRadius="full"
                bg="#646464"
                color="#000000"
                fontSize="16px"
                fontFamily="Onest"
                fontWeight="400"
              >
                Python
              </Button> */}
              <Button
                borderRadius="full"
                bg="#646464"
                color="#000000"
                fontSize="16px"
                fontFamily="Onest"
                fontWeight="400"
              >
                React
              </Button>
              <Button
                borderRadius="full"
                bg="#646464"
                color="#000000"
                fontSize="16px"
                fontFamily="Onest"
                fontWeight="400"
              >
                TypeScript
              </Button>
            </HStack>
            <Heading fontSize="32px" fontFamily="Onest" fontWeight="400">
              GameHub
            </Heading>
            <Text>
              Gamehub is a video game discovery platform that helps users
              explore and find games based on platform, genre, and ratings.
              Powered by the RAWG API, it provides a seamless browsing
              experience, allowing gamers to filter and discover titles that
              match their preferences. The platform is designed for an intuitive
              user experience, making it easy to navigate and uncover new games.
            </Text>

            <HStack>
              <Button
                color="white"
                leftIcon={<RiLinkM />}
                fontWeight="400"
                bg="none"
                as="a"
                href="https://game-hub-blond-mu.vercel.app/"
                target="_blank"
              >
                Live Demo
              </Button>
              <Button
                color="white"
                leftIcon={<FiGithub />}
                fontWeight="400"
                bg="none"
                as="a"
                href="https://github.com/Desegya/game-hub"
                target="_blank"
              >
                Github
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        my={8}
        gap={6}
      >
        {/* Image Section */}
        <Box flex="1">
          <Image
            src={eventlight}
            alt="A screenshot of Eventlight's homepage"
            borderRadius="lg"
            objectFit="cover"
            w="100%"
          />
        </Box>

        <Box flex="1">
          <Stack spacing={4}>
            <HStack>
              <Button
                borderRadius="full"
                bg="#646464"
                color="#000000"
                fontSize="16px"
                fontFamily="Onest"
                fontWeight="400"
              >
                Django
              </Button>
              <Button
                borderRadius="full"
                bg="#646464"
                color="#000000"
                fontSize="16px"
                fontFamily="Onest"
                fontWeight="400"
              >
                React
              </Button>
              <Button
                borderRadius="full"
                bg="#646464"
                color="#000000"
                fontSize="16px"
                fontFamily="Onest"
                fontWeight="400"
              >
                TypeScript
              </Button>
            </HStack>
            <Heading fontSize="32px" fontFamily="Onest" fontWeight="400">
              EventLight
            </Heading>
            <Text>
              EventLight is an event discovery platform that helps users find
              and explore events with ease. It is currently a work in progress,
              with more features and enhancements underway.
            </Text>

            <HStack>
              <Button
                color="white"
                leftIcon={<RiLinkM />}
                fontWeight="400"
                bg="none"
                as="a"
                href="https://event-light.vercel.app"
                target="_blank"
              >
                Live Demo
              </Button>
              <Button
                color="white"
                leftIcon={<FiGithub />}
                fontWeight="400"
                bg="none"
                as="a"
                href="https://github.com/Desegya/eventLight"
                target="_blank"
              >
                Github
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        my={8}
        gap={6}
      >
        {/* Image Section */}
        <Box flex="1">
          <Image
            src={atpb}
            alt="AgriConnect Home Page"
            borderRadius="lg"
            objectFit="cover"
            w="100%"
          />
        </Box>

        {/* Text Section */}
        <Box flex="1">
          <Stack spacing={4}>
            <HStack>
              <Button
                borderRadius="full"
                bg="#646464"
                color="#000000"
                fontSize="16px"
                fontFamily="Onest"
                fontWeight="400"
              >
                NextJS
              </Button>
              <Button
                borderRadius="full"
                bg="#646464"
                color="#000000"
                fontSize="16px"
                fontFamily="Onest"
                fontWeight="400"
              >
                React
              </Button>
              <Button
                borderRadius="full"
                bg="#646464"
                color="#000000"
                fontSize="16px"
                fontFamily="Onest"
                fontWeight="400"
              >
                TypeScript
              </Button>
            </HStack>
            <Heading fontSize="32px" fontFamily="Onest" fontWeight="400">
              Around Town Property Brokers
            </Heading>
            <Text>
              A single‑page marketing site built for a local real‑estate agency.
              Mobile‑first, fully responsive, with smooth scroll‑into‑sections
              and custom SVG graphics. Developed as a client project.
            </Text>

            <HStack>
              <Button
                color="white"
                leftIcon={<RiLinkM />}
                fontWeight="400"
                bg="none"
                as="a"
                href="https://atpb.org"
                target="_blank"
              >
                Live Demo
              </Button>
              {/* <Button
                color="white"
                leftIcon={<FiGithub />}
                fontWeight="400"
                bg="none"
                as="a"
                href="https://github.com/Desegya/Agriconnect"
                target="_blank"
              >
                Github
              </Button> */}
            </HStack>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
