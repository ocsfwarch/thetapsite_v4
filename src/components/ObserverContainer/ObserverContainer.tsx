import { VStack } from "@chakra-ui/react";
import "./ObserverContainer.css";
import AboutMe from "../AboutMe/AboutMe";
import WorkHistory from "../WorkHistory/WorkHistory";
import Education from "../Education/Education";
import { Projects } from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { useEffect, useRef, useState } from "react";

const ObserverContainer = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const workHistoryRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const ele = skillsRef.current;
    if (!ele) {
      return;
    }

    const elementArray = [
      //   aboutRef,
      workHistoryRef,
      skillsRef,
      educationRef,
      projectsRef,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(`entry id = ${entry.target.id}`);
          //   console.log(`isIntersection = ${entry.isIntersecting}`);
          if (entry.isIntersecting) {
            console.log(`${entry.target.id} is intersecting...`);
          }
          setIsAtTop(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    elementArray.forEach((entry) => {
      if (entry.current) {
        observer.observe(entry.current);
      }
    });

    return () => {
      observer.unobserve(ele);
    };
  }, []);

  return (
    <VStack id="layout_info_container" maxHeight={"100vh"}>
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <div ref={workHistoryRef} id="WorkHistoryId">
        <WorkHistory />
      </div>
      <div ref={skillsRef} id="SkillsId">
        <Skills />
      </div>
      <div ref={educationRef} id="EducationId">
        <Education />
      </div>
      <div ref={projectsRef} id="ProjectsId">
        <Projects projectType="enterprise" />
      </div>
    </VStack>
  );
};

export default ObserverContainer;
