import { Button, VStack } from "@chakra-ui/react";
import "./Navigator.css";
import { BsTools, BsBook, BsTrophy, BsPersonWorkspace } from "react-icons/bs";

const Navigator = () => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <VStack>
        <Button
          leftIcon={<BsPersonWorkspace />}
          colorScheme="teal"
          variant="outline"
          width="9rem"
          justifyContent="left"
        >
          Experience
        </Button>
        <Button
          leftIcon={<BsTrophy />}
          colorScheme="teal"
          variant="outline"
          width="9rem"
          justifyContent="left"
        >
          Skills
        </Button>
        <Button
          leftIcon={<BsBook />}
          colorScheme="teal"
          variant="outline"
          width="9rem"
          justifyContent="left"
        >
          Education
        </Button>
        <Button
          leftIcon={<BsTools />}
          colorScheme="teal"
          variant="outline"
          width="9rem"
          justifyContent="left"
        >
          Projects
        </Button>
      </VStack>
    </div>
  );
};

export default Navigator;
