import React, { MouseEvent } from "react";

interface Props {
  projectType: string;
  updateProjectType: (event: MouseEvent) => void;
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
                  onClick={updateProjectType}
                >
                  Enterprise
                </button>
              </li>
              <li>
                <button
                  className={projectType === "general" ? "use_underline" : ""}
                  name="general"
                  onClick={updateProjectType}
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
