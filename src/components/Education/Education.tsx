import { SimpleGrid, VStack } from "@chakra-ui/react";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 1, xl: 1 }}
      spacing={10}
      padding="10px"
      mb="6.5rem"
    >
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
    </SimpleGrid>
  );
};

export default Education;
