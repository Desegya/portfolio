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
    <Box id="projects" pt="135px" justifySelf="center" maxW="1100px" px={{ base: "20px", md: 4 }}>
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
            src="http://dummyimage.com/480x360.png/dddddd/000000"
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
              <Button
                borderRadius="full"
                bg="#646464"
                color="#000000"
                fontSize="16px"
                fontFamily="Onest"
                fontWeight="400"
              >
                Python
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
              Project With React
            </Heading>
            <Text>
              Proyectos realizados con la biblioteca React. Este proyecto me
              permitió mejorar mis habilidades en React, aprendiendo a trabajar
              con componentes, estados y props. Enfrenté desafíos como la
              creación de una interfaz atractiva y funcional, así como la
              implementación de un diseño responsivo.
            </Text>

            <HStack >
              <Button color="white" leftIcon={<RiLinkM />} fontWeight="400" bg="none">
                Live Demo
              </Button>
              <Button color="white" leftIcon={<FiGithub />} fontWeight="400" bg="none">
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
            src="http://dummyimage.com/480x360.png/dddddd/000000"
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
              <Button
                borderRadius="full"
                bg="#646464"
                color="#000000"
                fontSize="16px"
                fontFamily="Onest"
                fontWeight="400"
              >
                Python
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
              Project With React
            </Heading>
            <Text>
              Proyectos realizados con la biblioteca React. Este proyecto me
              permitió mejorar mis habilidades en React, aprendiendo a trabajar
              con componentes, estados y props. Enfrenté desafíos como la
              creación de una interfaz atractiva y funcional, así como la
              implementación de un diseño responsivo.
            </Text>

            <HStack>
              <Button color="white" leftIcon={<RiLinkM />} fontWeight="400" bg="none">
                Live Demo
              </Button>
              <Button color="white" leftIcon={<FiGithub />} fontWeight="400" bg="none">
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
            src="http://dummyimage.com/480x360.png/dddddd/000000"
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
              <Button
                borderRadius="full"
                bg="#646464"
                color="#000000"
                fontSize="16px"
                fontFamily="Onest"
                fontWeight="400"
              >
                Python
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
              Project With React
            </Heading>
            <Text>
              Proyectos realizados con la biblioteca React. Este proyecto me
              permitió mejorar mis habilidades en React, aprendiendo a trabajar
              con componentes, estados y props. Enfrenté desafíos como la
              creación de una interfaz atractiva y funcional, así como la
              implementación de un diseño responsivo.
            </Text>

            <HStack>
              <Button color="white" leftIcon={<RiLinkM />} fontWeight="400" bg="none">
                Live Demo
              </Button>
              <Button color="white" leftIcon={<FiGithub />} fontWeight="400" bg="none">
                Github
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
