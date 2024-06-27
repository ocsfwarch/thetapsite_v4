import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";

interface stackItem {
  src: string;
  title: string;
  alt: string;
}

interface projectItem {
  type: string;
  title: string;
  image: string;
  href: string;
  git: string;
  summary: string;
  stack: stackItem[];
}

interface Props {
  project: projectItem;
}

const ProjectCard = ({ project }: Props) => {
  let appLink = null;
  if (project.href && project.href.length > 0) {
    appLink = (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        title="Click to show the app"
      >
        <button type="button" className="btn btn-primary">
          Visit App
        </button>
      </a>
    );
  }

  let gitLink = null;
  if (project.git && project.git.length > 0) {
    gitLink = (
      <a
        href={project.git}
        target="_blank"
        rel="noreferrer"
        title="Click to visit the GitHub repository"
      >
        <button type="button" className="btn btn-primary">
          Visit GitHub
        </button>
      </a>
    );
  }

  return (
    <Card borderRadius={10} overflow="hidden" minWidth="350px">
      <CardHeader>
        <Heading fontSize="2xl" textAlign="center">
          {project.title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Image src={project.image} />
        <Text marginTop={4}>{project.summary}</Text>
      </CardBody>
      <CardFooter>
        <Stack divider={<StackDivider />} spacing={4} width="100%">
          <HStack justifyContent="center">
            {project.stack.map((item, idx) => (
              <Tooltip label={item.title} key={idx} placement="top-start">
                <Image
                  src={item.src}
                  alt={item.alt}
                  height="35px"
                  width="35px"
                />
              </Tooltip>
            ))}
          </HStack>
          <HStack spacing={4} justifyContent="center">
            {appLink}
            {gitLink}
          </HStack>
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
