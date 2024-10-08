import { VStack } from "@chakra-ui/react";
import "./ObserverContainer.css";
import AboutMe from "../AboutMe/AboutMe";
import WorkHistory from "../WorkHistory/WorkHistory";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { useEffect, useRef, useState } from "react";
import StickyHeader from "../StickyHeader/StickyHeader";

interface Props {
  handleSetCurrentFocus: (divId: string) => void;
  displayHeaders: boolean;
}

const ObserverContainer = ({
  handleSetCurrentFocus,
  displayHeaders,
}: Props) => {
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
      aboutRef,
      workHistoryRef,
      skillsRef,
      educationRef,
      projectsRef,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          //   console.log(`entry id = ${entry.target.id}`);
          //   console.log(`isIntersection = ${entry.isIntersecting}`);
          if (entry.isIntersecting) {
            handleSetCurrentFocus(entry.target.id);
          }
          setIsAtTop(entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );

    elementArray.forEach((entry) => {
      if (entry.current) {
        observer.observe(entry.current);
      }
    });

    return () => {
      elementArray.forEach((entry) => {
        if (entry.current) {
          observer.unobserve(entry.current);
        }
      });
    };
  }, []);

  return (
    <VStack id="layout_info_container" maxHeight={"100vh"}>
      <div ref={aboutRef} id="aboutMeId" className="observer-item-container">
        <StickyHeader id="about" title="About" />
        <AboutMe />
      </div>
      <div
        ref={workHistoryRef}
        id="workHistoryId"
        className="observer-item-container"
      >
        <StickyHeader id="experience" title="Experience" />
        <WorkHistory />
      </div>
      <div ref={skillsRef} id="skillsId" className="observer-item-container">
        <StickyHeader id="skills" title="Skills" />
        <Skills />
      </div>
      <div
        ref={educationRef}
        id="educationId"
        className="observer-item-container"
      >
        <StickyHeader id="education" title="Education" />
        <Education />
      </div>
      <div
        ref={projectsRef}
        id="projectsId"
        className="observer-item-container"
      >
        <StickyHeader id="projects" title="Projects" />
        <Projects projectType="enterprise" />
      </div>
    </VStack>
  );
};

export default ObserverContainer;
