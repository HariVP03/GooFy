import React from "react";
import { Flex } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import CreatePost from "./components/CreatePost";

const Section1 = () => {
  return (
    <Flex w="100vw" h="100vh" bg="bg.2" color="black" direction="column">
      <Navbar />
      <Flex minW="100vw" minH="100vh" direction="row" justifyContent="center">
        <Flex minW="80vw" minH="100vh" bg="bg.2">
          <Flex
            mt="30vh"
            rounded="md"
            minH="45vh"
            minW="100%"
            direction="row"
            justifyContent="center"
            alignItems="centre"
          >
            <CreatePost />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section1;
