import { SimpleGrid, VStack } from "@chakra-ui/react";
import EducationCard from "./EducationCard";
import StickyHeader from "../StickyHeader/StickyHeader";

const Education = () => {
  return (
    <VStack spacing="1rem">
      {/* <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={10} padding="10px"> */}
      <StickyHeader id="education" title="Education" />
      <EducationCard
        educationItem={{
          degree: "Bachelor of Science, Computer Science",
          school: "California State University, Fullerton",
          graduated: "Graduated 2003",
          image: "/images/Techs/CSUF_3.png",
        }}
      />
      <EducationCard
        educationItem={{
          degree: "Master of Science, Software Engineering",
          school: "California State University, Fullerton",
          graduated: "Graduated 2006",
          image: "/images/Techs/CSUF_3.png",
        }}
      />
      {/* </SimpleGrid> */}
    </VStack>
  );
};

export default Education;
