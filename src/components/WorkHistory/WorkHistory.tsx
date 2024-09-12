import { WorkHistoryItems } from "../../helpers/WorkHistoryItems";
import { SimpleGrid } from "@chakra-ui/react";
import WorkHistoryCard from "./WorkHistoryCard";

const WorkHistory = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 1, xl: 1 }}
      spacing={10}
      padding="10px"
      mb="6.5rem"
    >
      {WorkHistoryItems.map((item) => (
        <WorkHistoryCard key={item.id} item={item} />
      ))}
    </SimpleGrid>
  );
};

export default WorkHistory;
