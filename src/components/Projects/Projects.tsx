import { ProjectItems } from "../../helpers/ProjectItems";
import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

interface Props {
  projectType: string;
}

/**
 * Create a list of Projects based on the type of project.
 * @param props.projectType
 *  the project type to filter, this is a string value
 * @returns
 *  An array of divs containing a Project.
 */
const Projects = ({ projectType }: Props) => {
  // Here we want to filter the projects by
  // project type and then create a list of
  // the projects.
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 1, xl: 1 }}
      spacing={10}
      padding="10px"
      mb="6.5rem"
    >
      {ProjectItems.filter((item) => item.type === projectType).map(
        (item, idx) => (
          <ProjectCard key={idx} project={item} />
        )
      )}
    </SimpleGrid>
  );
}; // End Projects

export default Projects;
