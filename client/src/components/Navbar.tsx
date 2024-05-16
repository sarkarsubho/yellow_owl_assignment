import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import ProfileCard from "./ProfileCard";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      bg={
        " linear-gradient(54deg, rgba(74,221,128,1) 0%, rgba(59,130,245,1) 100%);"
      }
      height={"10vh"}
      gap={"15px"}
      fontSize={"20px"}
      fontWeight={600}
      alignItems={"center"}
      pl={"1rem"}
    >
      <Show below="md">
        <Box padding={"20px"} cursor={"pointer"} onClick={onOpen}>
          <MenuIcon color="white" fontSize={"23px"} />
        </Box>

        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent
            bg={
              "linear-gradient(90deg, rgba(31,64,176,1) 0%, rgba(111,56,216,1) 75%, rgba(145,52,233,1) 100%);"
            }
          >
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <ProfileCard />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>

      <Text color={"white"}>Students</Text>
    </Flex>
  );
};

export default Navbar;
