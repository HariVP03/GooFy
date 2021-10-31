import React from "react";
import {
  Flex,
  Text,
  Textarea,
  Button,
  chakra,
  Heading,
  Icon,
  Stack,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

const CreatePost: React.FC = () => {
  return (
    <Flex
      direction="column"
      rounded="xl"
      justifyContent="center"
      alignItems="center"
      minW="90%"
      maxH="80%"
      bg="bg.1"
    >
      <Flex mb="10px" direction="column">
        <Heading textAlign="center" fontFamily="Poppins" mb="10px">
          Post Something...
        </Heading>
        <Textarea
          size="lg"
          minW="600px"
          textOverflow="wrap"
          outline="1px solid"
          outlineColor="misc.2"
          _focus={{}}
          variant="outline"
          _placeholder={{ color: "gray.500" }}
          fontFamily="Lato"
          justifyContent="flex-start"
          placeholder="Share something with your friends!"
        />
      </Flex>
      <Flex
        minW="80%"
        my={1}
        justify="center"
        px={6}
        pt={5}
        pb={6}
        borderWidth={2}
        borderColor="black"
        borderStyle="dashed"
        rounded="md"
      >
        <Stack spacing={1} textAlign="center">
          <Icon
            mx="auto"
            boxSize={12}
            color="gray.500"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Icon>
          <Flex fontSize="md" color="black" alignItems="baseline">
            <chakra.label
              htmlFor="file-upload"
              cursor="pointer"
              rounded="md"
              fontSize="md"
              color="misc.3"
              pos="relative"
              _hover={{
                color: "misc.2",
              }}
            >
              <span style={{ fontFamily: "Poppins" }}>Upload a file</span>
              <VisuallyHidden>
                <input id="file-upload" name="file-upload" type="file" />
              </VisuallyHidden>
            </chakra.label>
            <Text pl={1} fontFamily="Poppins">
              or drag and drop
            </Text>
          </Flex>
          <Text fontSize="xs" color={useColorModeValue("gray.500", "gray.50")}>
            PNG, JPG, GIF up to 10MB
          </Text>
        </Stack>
      </Flex>
      <Button
        bg="button.1"
        _hover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        size="lg"
        maxW="100px"
      >
        Post
      </Button>
    </Flex>
  );
};

export default CreatePost;
