import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import "../styles/globals.css";
import Section1 from "../src/Section1";

const colors = {
  bg: {
    1: "#FFFFFC",
    // 2: "#FDFFB6",
    2: "#FEF0E5",
    3: "#CAFFBF",
  },
  button: {
    1: "#9BF6FF",
    2: "#A0C4FF",
    3: "#BDB2FF",
  },
  misc: {
    1: "#FFC6FF",
    2: "#FFD6A5",
    3: "#FFADAD",
  },
};

const theme = extendTheme({ colors });

function MyApp() {
  return (
    <ChakraProvider theme={theme}>
      <Section1 />
    </ChakraProvider>
  );
}

export default MyApp;
