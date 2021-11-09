import React from "react";
import NextLink from "next/link";
import {
  chakra,
  Box,
  Flex,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Tabs,
  TabList,
  Tab,
  Spacer,
} from "@chakra-ui/react";
import { Logo } from "@choc-ui/logo";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";

const Navbar: React.FC = () => {
  const mobileNav = useDisclosure();

  return (
    // TODO: Optimize the mobile view of the navbar
    <Box
      style={{ backdropFilter: "blur(5px)" }}
      shadow="md"
      width="100%"
      position="fixed"
      zIndex="5"
    >
      <chakra.header
        bg="bg.4"
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg="bg.2"
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />

                <Button
                  color="gray.700"
                  w="full"
                  variant="ghost"
                  leftIcon={<AiFillHome />}
                >
                  Dashboard
                </Button>

                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<AiOutlineInbox />}
                >
                  Inbox
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<BsFillCameraVideoFill />}
                >
                  Videos
                </Button>
              </VStack>
            </Box>

            <chakra.h1
              color="button.1"
              fontSize="3xl"
              fontFamily="'Fredoka One', cursive;"
            >
              <NextLink href="/">GooFy</NextLink>
            </chakra.h1>
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Button
                color="gray.800"
                variant="ghost"
                leftIcon={<AiFillHome />}
                size="md"
                fontSize="md"
                _hover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              >
                Dashboard
              </Button>
              <Button
                variant="solid"
                color="gray.800"
                leftIcon={<AiOutlineInbox />}
                size="md"
                _hover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              >
                Inbox
              </Button>
              <Button
                variant="ghost"
                color="gray.800"
                leftIcon={<BsFillCameraVideoFill />}
                size="md"
                _hover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              >
                Videos
              </Button>
            </HStack>
            <chakra.a p={3} color="gray.800" rounded="sm" cursor="pointer">
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>

            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </HStack>
        </Flex>
      </chakra.header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={2}
        borderWidth={0}
        overflowX="auto"
        bg="bg.1"
      ></Flex>
    </Box>
  );
};

export default Navbar;
