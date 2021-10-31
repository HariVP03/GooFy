import React from "react";

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
    <Box shadow="md" width="100%" position="absolute">
      <chakra.header
        bg="bg.2"
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
              bgGradient="linear(to-r, misc.3,button.2)"
              bgClip="text"
              fontSize="3xl"
              fontFamily="'Fredoka One', cursive;"
            >
              GooFy
            </chakra.h1>
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Button
                color="gray.800"
                letterSpacing="0.15ch"
                variant="ghost"
                leftIcon={<AiFillHome />}
                size="md"
                fontSize="md"
                _hover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              >
                Dashboard
              </Button>
              <Button
                letterSpacing="0.15ch"
                variant="solid"
                color="gray.800"
                leftIcon={<AiOutlineInbox />}
                size="md"
                _hover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              >
                Inbox
              </Button>
              <Button
                letterSpacing="0.15ch"
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
        mx={2}
        borderWidth={0}
        overflowX="auto"
      >
        <Tabs defaultIndex={0} borderBottomColor="transparent">
          <TabList>
            <Tab fontFamily="Lato" py={4} m={0} _focus={{ boxShadow: "none" }}>
              Feed
            </Tab>
            <Tab fontFamily="Lato" py={4} m={0} _focus={{ boxShadow: "none" }}>
              Friends
            </Tab>
            <Tab fontFamily="Lato" py={4} m={0} _focus={{ boxShadow: "none" }}>
              Groups
            </Tab>
            <Tab fontFamily="Lato" py={4} m={0} _focus={{ boxShadow: "none" }}>
              Saved
            </Tab>
            <Tab fontFamily="Lato" py={4} m={0} _focus={{ boxShadow: "none" }}>
              Events
            </Tab>{" "}
          </TabList>
        </Tabs>
        <Spacer />
        <HStack spacing={3} alignItems="center">
          <InputGroup
            border="1px solid"
            borderColor="misc.2"
            minW="500px"
            rounded="md"
            display={{ base: "none", lg: "block" }}
            ml="auto"
          >
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Search..." />
          </InputGroup>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
