import React from "react";
import { Flex } from "@chakra-ui/react";

import Navbar from "./components/Navbar";

const Section1 = () => {
  return (
    <Flex w="100vw" h="100vh" bg="bg.1" color="black" direction="column">
      <Navbar />
      <Flex minW="100vw" minH="100vh" direction="row" justifyContent="center">
        <Flex minW="75vw" minH="100vh">
          <Flex mt="20%" maxH="45%" minW="100%">
            Make a post text input
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section1;
