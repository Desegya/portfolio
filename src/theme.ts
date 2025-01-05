import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto";

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  styles: {
    global: {
      body: {
        fontFamily: `'Roboto', sans-serif`,
        bg: "black", 
        color: "white", 
      },
    },
  },
});

export default theme;
