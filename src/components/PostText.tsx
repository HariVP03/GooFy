import React, { useState } from "react";
import { Flex, Text, Avatar, Button } from "@chakra-ui/react";

const PostText: React.FC = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  var textArray = [
    "Yo mama so fat she falls off both sides of the bed",
    "Yo mama so ugly when she visits the dentist they make her lay face down",
    "Yo mama so fat Thanos needed to snap twice to get rid of her entire body",
    "Yo mama so fat she falls off both sides of the bed",
  ];

  return (
    <Flex
      maxW="100%"
      minH="100px"
      maxH="500px"
      bg="bg.1"
      my="20px"
      p={3}
      rounded="lg"
      direction="column"
      justifyContent="space-between"
    >
      <Flex w="100%" maxH="10%" mt={3} px={3} alignItems="center">
        <Avatar src="https://bit.ly/dan-abramov" />
        <Text
          color="gray.100"
          fontFamily="Poppins"
          fontSize="xl"
          fontWeight="bold"
          ml={3}
        >
          Dan Abramov
        </Text>
        <Text
          color="gray.100"
          fontFamily="Lato"
          fontSize="lg"
          fontWeight="normal"
        >
          &nbsp; posted this an hour ago
        </Text>
      </Flex>
      <Flex
        w="100%"
        maxH="80%"
        p={3}
        my={5}
        fontFamily="Poppins"
        direction="column"
      >
        {textArray.map((sentence) => (
          <Text key={sentence} size="md" color="gray.100">
            {sentence}
          </Text>
        ))}
      </Flex>
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
          color={clicked1 ? "blue.400" : "gray.100"}
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
          color={clicked2 ? "blue.400" : "gray.100"}
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
          color={clicked3 ? "blue.400" : "gray.100"}
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
export default PostText;
