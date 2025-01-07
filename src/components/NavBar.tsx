import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  IconButton,
  Collapse,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
  scrollToTop: () => void;
}

const NavBar = ({ scrollToTop }: Props) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg="black"
      color="white"
      position="fixed"
      top="0"
      right={4}
      left={4}
      zIndex="100"
    >
      <Flex justifyContent="space-between" align="center" w="100%" py={4}>
        <Heading as="h2" fontSize="18px" fontWeight="bold">
          Desmond Egya
        </Heading>

        {/* Desktop Links */}
        <HStack
          as="nav"
          spacing="25px"
          display={{ base: "none", md: "flex" }}
          fontSize="16px"
        >
          <Link onClick={scrollToTop}>HOME</Link>
          <Link href="#projects">PROJECTS</Link>
          <Link href="#skills">SKILLS</Link>
          <Link href="#about">ABOUT ME</Link>
        </HStack>

        {/* Hamburger Icon */}
        <IconButton
          icon={isOpen ? <IoCloseSharp /> : <RxHamburgerMenu />}
          aria-label="Toggle Navigation"
          variant="outline"
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          bg="gray.900"
          color="white"
          borderRadius="full"
          border="none"
        />
      </Flex>

      {/* Collapsible Menu for Mobile */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          as="nav"
          textAlign="right"
          p={4}
          rounded="md"
          display={{ md: "none" }} // Hide on desktop
        >
          <Link display="block" href="#">
            HOME
          </Link>
          <Link display="block" href="#">
            PROJECTS
          </Link>
          <Link display="block" href="#">
            SKILLS
          </Link>
          <Link display="block" href="#">
            ABOUT ME
          </Link>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default NavBar;
