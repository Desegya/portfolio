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
            src="https://res.cloudinary.com/ddbs7m7nt/image/upload/f_webp,q_auto/v1751910571/gamehub_hyhpmy.png"
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
            src="https://res.cloudinary.com/ddbs7m7nt/image/upload/f_webp,q_auto/v1755426952/elan.png"
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
              ÉLAN Made Perfect
            </Heading>
            <Text>
              ÉLAN Made Perfect is a modern e-commerce store built with Django
              and MySQL, designed for a smooth and elegant shopping experience.
              The platform allows customers to browse products seamlessly, with
              secure backend management and optimized media storage powered by
              Cloudinary. Developed with scalability in mind, it provides a
              strong foundation for future growth, including order handling and
              advanced product features.
            </Text>

            <HStack>
              <Button
                color="white"
                leftIcon={<RiLinkM />}
                fontWeight="400"
                bg="none"
                as="a"
                href="https://shopelan.co"
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
                href="https://github.com/Desegya/eventLight"
                target="_blank"
              >
                Github
              </Button> */}
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
            src="https://res.cloudinary.com/ddbs7m7nt/image/upload/f_auto,q_auto/c_fill,w_600,h_400/v1751911736/atpb_kuwbij.png"
            alt="Atpb landing page screenshot"
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
              Single‑page marketing site for a real‑estate agency Fully
              responsive, featuring seamless section scrolling and polished UI
              interactions. Developed end‑to‑end as a client project.
            </Text>

            <HStack>
              <Button
                color="white"
                leftIcon={<RiLinkM />}
                fontWeight="400"
                bg="none"
                as="a"
                href="https://www.atpb.org"
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
