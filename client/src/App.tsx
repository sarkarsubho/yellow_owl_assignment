import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <Flex width={"100vw"}>
      <Sidebar></Sidebar>
      <Flex flexGrow={1} direction={"column"} width={[7]}>
        <Navbar />
        <Body></Body>
      </Flex>
    </Flex>
  );
}

export default App;
