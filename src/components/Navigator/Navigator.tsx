import { Button, VStack } from "@chakra-ui/react";
import "./Navigator.css";
import {
  BsInfoSquare,
  BsTools,
  BsBook,
  BsTrophy,
  BsPersonWorkspace,
} from "react-icons/bs";

interface Props {
  activeId: string;
  changeNavId: (navId: string) => void;
}

const Navigator = ({ activeId, changeNavId }: Props) => {
  //console.log(`ActiveId = ${activeId}`);
  return (
    <div style={{ marginBottom: "1rem" }}>
      <VStack>
        <Button
          leftIcon={<BsInfoSquare />}
          colorScheme={activeId === "aboutMeId" ? "red" : "teal"}
          variant="outline"
          width="9rem"
          justifyContent="left"
          cursor={"default"}
          onClick={() => changeNavId("aboutMeId")}
        >
          About
        </Button>
        <Button
          leftIcon={<BsPersonWorkspace />}
          colorScheme={activeId === "workHistoryId" ? "red" : "teal"}
          variant="outline"
          width="9rem"
          justifyContent="left"
          cursor={"default"}
          onClick={() => changeNavId("workHistoryId")}
        >
          Experience
        </Button>
        <Button
          leftIcon={<BsTrophy />}
          colorScheme={activeId === "skillsId" ? "red" : "teal"}
          variant="outline"
          width="9rem"
          justifyContent="left"
          cursor={"default"}
          onClick={() => changeNavId("skillsId")}
        >
          Skills
        </Button>
        <Button
          leftIcon={<BsBook />}
          colorScheme={activeId === "educationId" ? "red" : "teal"}
          variant="outline"
          width="9rem"
          justifyContent="left"
          cursor={"default"}
          onClick={() => changeNavId("educationId")}
        >
          Education
        </Button>
        <Button
          leftIcon={<BsTools />}
          colorScheme={activeId === "projectsId" ? "red" : "teal"}
          variant="outline"
          width="9rem"
          justifyContent="left"
          cursor={"default"}
          onClick={() => changeNavId("projectsId")}
        >
          Projects
        </Button>
      </VStack>
    </div>
  );
};

export default Navigator;
