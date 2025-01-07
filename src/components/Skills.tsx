import {
  Box,
  Heading,
  Text,
  HStack,
  Flex,
} from "@chakra-ui/react";
import {
  SiReact,
  SiPython,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDjango,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Python", icon: SiPython },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Git", icon: SiGit },
  { name: "Django", icon: SiDjango },
  { name: "MySQL", icon: SiMysql },
  { name: "JavaScript", icon: SiJavascript },
];

const Skills = () => {
  return (
    <Box id="skills" mx="auto"  alignContent="center" pt={{base: "50px", md:"100px"}}>
      <Heading
        textAlign="center"
        color="#A3A3A3"
        textTransform="uppercase"
        fontSize={{ base: "29px", md: "48px" }}
        fontWeight="700"
        lineHeight="48px"
        mb="50px"
      >
        MY Skills
      </Heading>
      <Flex
        wrap="wrap"
        justify="center"
        rowGap="30px"
        columnGap={{base: "0px", md: "50px", lg:"80px" }}
        direction="row"
      >
        {skills.map((skill) => (
          <HStack
            key={skill.name}
            w={{
              base: "calc(100% / 2)",
              md: "calc(100% / 3 - 40px)",
              lg: "calc(100% / 4 - 40px)",
              xl: "calc(100% / 6 - 40px)",
            }}
            mb={4}
            spacing={4}
            justify="center"
            align="center"
          >
            <Box
              as={skill.icon}
              boxSize="32px"
              color="#A3A3A3"
              _hover={{ color: "white", transform: "scale(1.1)" }}
              transition="all 0.3s ease"
            />
            <Text fontSize="20px" fontWeight="400" color="white">
              {skill.name}
            </Text>
          </HStack>
        ))}
      </Flex>
    </Box>
  );
};

export default Skills;
