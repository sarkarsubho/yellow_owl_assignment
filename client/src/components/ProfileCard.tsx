import { Flex, Heading, Image, Text } from "@chakra-ui/react";

const ProfileCard = () => {
  return (
    <Flex padding={"15px"} gap={"20px"}>
      <Image
        borderRadius="full"
        boxSize="50px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Flex direction={"column"}>
        <Heading as="h4" size="md" color={"white"}>
          Yellow Owl
        </Heading>
        <Text fontSize={"md"} color={"lightblue"}>
          Admin
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileCard;
