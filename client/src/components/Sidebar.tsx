import { Box, Hide } from "@chakra-ui/react";
import ProfileCard from "./ProfileCard";

const Sidebar = () => {
  return (
    <Hide below="md">
      <Box
        bg={
          "linear-gradient(90deg, rgba(31,64,176,1) 0%, rgba(111,56,216,1) 75%, rgba(145,52,233,1) 100%);"
        }
        width={"20%"}
        height={"100vh"}
        pt={"20px"}
      >
        <ProfileCard />
      </Box>
    </Hide>
  );
};

export default Sidebar;
