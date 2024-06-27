import { SimpleGrid } from "@chakra-ui/react";
import StickyHeader from "../StickyHeader/StickyHeader";
import SkillItem from "./SkillItem";

const skills = [
  { image: "/images/Techs/bootstrap_logo.png", text: "Bootstrap" },
  { image: "/images/Techs/chakra_logo.png", text: "chakra" },
  { image: "/images/Techs/css.png", text: "CSS3" },
  { image: "/images/Techs/01-symbol_blue-docker-logo.png", text: "Docker" },
  { image: "/images/Techs/git.png", text: "GIT" },
  { image: "/images/Techs/github2.png", text: "GitHub" },
  { image: "/images/Techs/html.png", text: "HTML5" },
  { image: "/images/Techs/java_logo.png", text: "JAVA" },
  { image: "/images/Techs/js.png", text: "JavaScript" },
  { image: "/images/Techs/mocha_logo.png", text: "Mocha" },
  { image: "/images/Techs/mysql.png", text: "MySQL" },
  { image: "/images/Techs/node_logo.png", text: "Node" },
  { image: "/images/Techs/npm.png", text: "NPM" },
  { image: "/images/Techs/php.png", text: "PHP" },
  { image: "/images/Techs/postgresql.png", text: "Postgresql" },
  { image: "/images/Techs/react.png", text: "React" },
  { image: "/images/Techs/sequelize.png", text: "Sequelize" },
  { image: "/images/Techs/typescript_logo.png", text: "TypeScript" },
  { image: "/images/Techs/vscode.png", text: "Visual Studio Code" },
  { image: "/images/Techs/vue.png", text: "Vue.js" },
];

const Skills = () => {
  return (
    <div style={{ width: "100%" }}>
      <StickyHeader id="skills" title="Skills" />
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={10}
        padding="10px"
        mb="6.5rem"
      >
        {skills.map((item, idx) => (
          <SkillItem key={idx} image={item.image} title={item.text} />
        ))}
      </SimpleGrid>
    </div>
  );
  // return (
  //   <section className="skills_list">
  //     <ul>
  //       {skills.map((item, idx) => (
  //         <li key={idx}>
  //           <img src={item.image} alt={item.text} />
  //           <span>{item.text}</span>
  //         </li>
  //       ))}
  //     </ul>
  //   </section>
  // );
};

export default Skills;
