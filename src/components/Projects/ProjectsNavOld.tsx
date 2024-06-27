import React from "react";

interface Props {
  projectType: string;
  updateProjectType: (item: string) => void;
}

const ProjectsNav = ({ projectType, updateProjectType }: Props) => {
  return (
    <section className="menu_display">
      <section className="app_header_menu">
        <nav className="navContent">
          <section>
            <ul className="navLinks">
              <li>
                <button
                  className={
                    projectType === "enterprise" ? "use_underline" : ""
                  }
                  name="enterprise"
                  // type="none"
                  // onClick={updateProjectType}
                >
                  Enterprise
                </button>
              </li>
              <li>
                <button
                  className={projectType === "general" ? "use_underline" : ""}
                  name="general"
                  // type="none"
                  // onClick={updateProjectType}
                >
                  General
                </button>
              </li>
            </ul>
          </section>
        </nav>
      </section>
    </section>
  );
};

export default ProjectsNav;
