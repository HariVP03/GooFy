import React from "react";
import { Flex } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import CreatePost from "./components/CreatePost";
import PostPhoto from "./components/PostPhoto";
import PostText from "./components/PostText";

const Section1 = () => {
  return (
    <Flex bg="bg.2" maxW="100vw" minH="100vh" color="black" direction="column">
      <Navbar />
      <Flex maxW="100vw" direction="row" justifyContent="center">
        <Flex minW="80vw" minH="100vh" bg="bg.2">
          <Flex rounded="md" minH="45vh" minW="100%" direction="column">
            <CreatePost />
            <PostPhoto />
            <PostText />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section1;
