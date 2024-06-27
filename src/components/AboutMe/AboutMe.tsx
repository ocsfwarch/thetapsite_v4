import { Box } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Box
      width={"calc(100% - 1rem)"}
      padding={"10px"}
      fontSize={"1.5rem"}
      color={"var(--chat-gray-400)"}
    >
      👋Hi, my name is Terry Partridge. I have been a Full Stack Software
      Engineer based in Mission Viejo, California since 2000. For the past 4
      years my primary focus for frontend and backend development has been using
      PostgreSQL, Express, React, and Node. I love the creative process
      associated with developing software and the constant advances in software
      development technologies. These allow me to build applications that are
      useful to people and it feeds my need for continuous improvement.
    </Box>
  );
};

export default AboutMe;
