import { Flex, Avatar, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const PostPhoto: React.FC = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  return (
    <Flex
      maxW="100%"
      minH="700px"
      bg="bg.3"
      my="20px"
      p={3}
      rounded="lg"
      direction="column"
      justifyContent="space-between"
    >
      <Flex w="100%" maxH="10%" mt={3} px={3} alignItems="center">
        <Avatar src="https://bit.ly/dan-abramov" />
        <Text fontFamily="Poppins" fontSize="xl" fontWeight="bold" ml={3}>
          Dan Abramov
        </Text>
        <Text fontFamily="Lato" fontSize="lg" fontWeight="normal">
          &nbsp; posted this photo an hour ago
        </Text>
      </Flex>
      <Flex
        minH="80%"
        my="20px"
        bgImage="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
      ></Flex>
      <Flex
        minH="5%"
        direction="row"
        justifyContent="space-around"
        bg="rgb(0,0,0,0.05)"
      >
        <Button
          fontFamily="Poppins"
          _hover={{}}
          fontSize="lg"
          cursor="pointer"
          bg=""
          color={clicked1 ? "blue" : "black"}
          _focus={{}}
          onClick={(e) => {
            setClicked1(!clicked1);
          }}
        >
          Like
        </Button>
        <Button
          fontFamily="Poppins"
          _hover={{}}
          bg=""
          _focus={{}}
          fontSize="lg"
          cursor="pointer"
          color={clicked2 ? "blue" : "black"}
          onClick={(e) => {
            setClicked2(!clicked2);
          }}
        >
          Comment
        </Button>
        <Button
          fontFamily="Poppins"
          _hover={{}}
          _focus={{}}
          bg=""
          fontSize="lg"
          cursor="pointer"
          color={clicked3 ? "blue" : "black"}
          onClick={(e) => {
            setClicked3(!clicked3);
          }}
        >
          Share
        </Button>
      </Flex>
    </Flex>
  );
};
export default PostPhoto;
