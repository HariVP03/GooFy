import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import Section1 from "../src/Section1";

const colors = {
  bg: {
    1: "#2C394B",
    2: "#334756",
    3: "#CAFFBF",
    4: "rgba(255, 255, 255, 0.75)",
  },
  button: {
    1: "#FF4C29",
    2: "#A0C4FF",
    3: "#BDB2FF",
  },
  misc: {
    1: "#FFC6FF",
    2: "#FFD6A5",
    3: "#FFADAD",
  },
};

const Button = {
  variants: {
    "filled-outline": {
      bg: "button.1",
      fontFamily: "Poppins",
      fontWeight: "600",
      justifyContent: "center",
      alignItems: "center",
      display: "inline-flex",
      color: "black",
      cursor: "pointer",
      _hover: {
        bg: "transparent",
        border: "2px solid",
        borderColor: "button.1",
        color: "white",
      },
    },
  },
};

const theme = extendTheme({
  colors,
  components: {
    Button,
  },
});

function MyApp() {
  return (
    <ChakraProvider theme={theme}>
      <Section1 />
    </ChakraProvider>
  );
}

export default MyApp;
