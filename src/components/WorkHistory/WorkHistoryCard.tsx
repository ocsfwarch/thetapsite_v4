import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Icon,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillStarFill,
  BsTools,
  BsTrophyFill,
} from "react-icons/bs";

interface WorkHistoryItem {
  id: number;
  company_name: string;
  company_location: string;
  company_url: string;
  job_title: string;
  job_type: string;
  job_start_date: string;
  job_stop_date: string;
  accomplishments: string[];
  responsibilities: string;
  skills: string[];
  tools: string[];
}

interface Props {
  item: WorkHistoryItem;
}

const WorkHistoryCard = ({ item }: Props) => {
  const [showMore, setShowMore] = useState(false);
  const handleChange = () => {
    setShowMore(!showMore);
  };
  return (
    <Card minWidth="350px" maxWidth="100%">
      <CardHeader>
        <Stack direction={["column", "row"]} justify="space-between">
          <Heading fontSize="2xl">{item.company_name}</Heading>
          <Text>{`[From: ${item.job_start_date} To: ${item.job_stop_date}]`}</Text>
        </Stack>
        <Stack direction={["column", "row"]} justify="space-between">
          <Heading fontSize="2xl" color="gray.600">
            {item.job_title}
          </Heading>
          <Text color="gray.600">{item.job_type}</Text>
        </Stack>
      </CardHeader>
      <CardBody>
        <Text>{item.responsibilities}</Text>
        <Box marginTop={2} display={showMore ? "box" : "none"}>
          <Heading fontSize="2xl">Accomplishments</Heading>
          <List marginLeft={2}>
            {item.accomplishments.map((accomplishment, idx) => {
              return (
                <HStack key={idx}>
                  <ListItem>
                    <Flex>
                      <Icon as={BsFillStarFill} color="gold" mt={0.5} mr={3} />
                      {accomplishment}
                    </Flex>
                  </ListItem>
                </HStack>
              );
            })}
          </List>
          <Heading fontSize="2xl" marginTop={2}>
            Skills
          </Heading>
          <List marginLeft={2}>
            {item.skills.map((skill, idx) => {
              return (
                <HStack key={idx}>
                  <Icon as={BsTrophyFill} color="silver" />
                  <ListItem>{skill}</ListItem>
                </HStack>
              );
            })}
          </List>
          <Heading fontSize="2xl" marginTop={2}>
            Tools
          </Heading>
          <List marginLeft={2}>
            {item.tools.map((tool, idx) => {
              return (
                <HStack key={idx}>
                  <Icon as={BsTools} color="green" />
                  <ListItem>{tool}</ListItem>
                </HStack>
              );
            })}
          </List>
        </Box>
      </CardBody>
      <CardFooter>
        <Button onClick={handleChange} aria-label="Search database">
          <HStack>
            {showMore ? (
              <Icon as={BsFillCaretUpFill} marginRight={1} />
            ) : (
              <Icon as={BsFillCaretDownFill} marginRight={1} />
            )}
            <Text color={showMore ? "tomato" : "green"}>
              {showMore ? "Show Less" : "Show More"}
            </Text>
          </HStack>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkHistoryCard;
