import { Box } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Box
      width={"calc(100% - 1rem)"}
      padding={"10px"}
      fontSize={"1.5rem"}
      color={"var(--chat-gray-400)"}
    >
      <p
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          fontSize: "1.5rem",
        }}
      >
        👋Hi, my name is Terry Partridge. I am a Full Stack Software Engineer
        based in Mission Viejo, California. My primary development experience
        for frontend and backend has been in React, TypeScript, PostgreSQL,
        Express, and Node. I love the creative process associated with
        developing software and the constant advances in software development
        technologies.
      </p>
      <p style={{ paddingBottom: "1rem", fontSize: "1.5rem" }}>
        When I am not at my computer, I am usually outside running or hiking,
        interacting with my wife and children, or maybe building some new home
        project.
      </p>
    </Box>
  );
};

export default AboutMe;
