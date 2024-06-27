import { HStack, Icon, Tooltip, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Greeting from "../Greeting/Greeting";

const Introduction = () => {
  const introContainerRef = useRef<HTMLDivElement>(null);

  return (
    <VStack ref={introContainerRef} alignItems="center">
      <VStack mt={9}>
        <Greeting
          name="Terry Partridge"
          title="Web Developer"
          narrative="Welcome to my space"
        />
        <HStack gap={8} fontSize={"1.5rem"}>
          <Tooltip label="GitHub" placement="left">
            <a href="https://github.com/ocsfwarch" target="_blank">
              <Icon as={BsGithub} />
            </a>
          </Tooltip>
          <Tooltip label="LinkedIn" placement="right">
            <a href="https://linkedin.com/in/terry-partridge" target="_blank">
              <Icon as={BsLinkedin} />
            </a>
          </Tooltip>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Introduction;
