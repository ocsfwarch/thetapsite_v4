import { Flex, Heading, VStack } from "@chakra-ui/react";

interface Props {
  name: string;
  title: string;
  narrative: string;
}

const Greeting = ({ name, title, narrative }: Props) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      width="100%"
      mb={3}
    >
      <Heading as="h1" size="2xl" noOfLines={1} color="#38598b">
        {name}
      </Heading>
      <Heading as="h2" size="xl" noOfLines={1} color="#F5DABA">
        {title}
      </Heading>
      <Heading as="h3" size="md" noOfLines={1} color="#5c5470">
        {narrative}
      </Heading>
    </Flex>
  );
};

export default Greeting;
