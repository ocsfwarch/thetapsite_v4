import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

interface Props {
  educationItem: {
    degree: string;
    school: string;
    graduated: string;
    image: string;
  };
}

const EducationCard = ({ educationItem }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" minWidth="350px">
      <CardHeader>
        <Heading fontSize="2xl" textAlign="left">
          {educationItem.degree}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>{educationItem.school}</Text>
        <Text>{educationItem.graduated}</Text>
      </CardBody>
      <CardFooter>
        <HStack justifyContent="end" width="100%">
          <Image height="5em" width="5em" src={educationItem.image} />
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default EducationCard;
