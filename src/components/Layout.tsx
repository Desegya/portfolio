import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';

interface Props {
  children: React.ReactNode;
  scrollToTop: () => void;
}

const Layout = ({ children, scrollToTop }: Props) => {
  return (
    <Box  px={{base: "10px", md: "40px"}} py={{base: "10px", md:"23px"}}>
      {/* Render the NavBar */}
      <NavBar scrollToTop={scrollToTop} />
      {/* Add space for content below the navbar */}
      <Box mt="80px">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
