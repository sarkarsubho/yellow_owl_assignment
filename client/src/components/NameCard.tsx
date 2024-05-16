import { Flex, Heading, Image } from "@chakra-ui/react";

interface cardProps {
  name: String;
}

const NameCard = ({ name }: cardProps) => {
  return (
    <Flex gap={"10px"} justifyContent={"left"} alignItems={"center"} padding={"10px"}>
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />

      <Heading as="h5" size="sm">
        {name} 
      </Heading>
    </Flex>
  );
};

export default NameCard;
