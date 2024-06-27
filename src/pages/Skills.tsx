import { VStack } from "@chakra-ui/react";
import SkillsList from "../components/Skills/SkillsList";
import StickyHeader from "../components/StickyHeader/StickyHeader";

const Skills = () => {
  return (
    <>
      <StickyHeader id="skills" title="Skills" />
      <VStack>
        <SkillsList />
      </VStack>
    </>
  );
};

export default Skills;
