import NavBar from "../components/NavBar";
import { SimpleGrid, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Introduction from "../components/Introduction/Introduction";
import ObserverContainer from "../components/ObserverContainer/ObserverContainer";

const Layout = () => {
  const [activeId, setActiveId] = useState("aboutMeId");
  const [displayHeaders, setDisplayHeaders] = useState(false); // Assumes 2 column display
  const [displayNavMenu, setDisplayNavMenu] = useState(true); // Assumes 2 column display

  useEffect(() => {
    // Select the grid element
    const gridContainer = document.querySelector("#layout_grid");

    if (gridContainer) {
      // Get the computed styles of the grid element
      const computedStyles = window.getComputedStyle(gridContainer);

      // Extract the 'grid-template-columns' property
      const gridTemplateColumns = computedStyles.getPropertyValue(
        "grid-template-columns"
      );

      // Perform the styling action
      const gridColumns = gridTemplateColumns.split(" ");
      const layoutContainer = document.getElementById("layout_container");
      const layoutInfoContainer = document.getElementById(
        "layout_info_container"
      );

      if (layoutContainer && layoutInfoContainer) {
        if (gridColumns.length > 1) {
          layoutContainer.style.overflowY = "";
          layoutContainer.style.overflowX = "";
          layoutInfoContainer.style.overflowY = "auto";
          setDisplayHeaders(false);
          setDisplayNavMenu(true);
        } else {
          layoutContainer.style.overflowY = "auto";
          layoutContainer.style.overflowX = "hidden";
          layoutInfoContainer.style.overflowY = "";
          setDisplayHeaders(true);
          setDisplayNavMenu(false);
        }
      }
    }
  });

  const handleSetCurrentFocus = (activeDivId: string) => {
    // console.log(`Active = ${activeDivId}`);
    setActiveId(activeDivId);
  };

  /**
   *
   * @param navId
   * const stdOffset is
   */
  const handleNavIdChange = (navId: string) => {
    const container = document.getElementById("layout_info_container");
    const ele = document.getElementById(navId);
    if (container && ele) {
      // container.scrollTo({ top: ele.offsetTop - 104, behavior: "smooth" });
      container.scrollTo({ top: ele.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <NavBar />
      <VStack id="layout_container" maxHeight={"100vh"} width={"100%"}>
        <SimpleGrid
          id="layout_grid"
          columns={{ sm: 1, md: 1, lg: 1, xl: 2 }}
          spacing={10}
          padding="10px"
          mb="6.5rem"
        >
          <Introduction
            activeId={activeId}
            displayNavMenu={displayNavMenu}
            changeNavId={handleNavIdChange}
          />
          <ObserverContainer
            handleSetCurrentFocus={handleSetCurrentFocus}
            displayHeaders={displayHeaders}
          />
        </SimpleGrid>
      </VStack>
    </div>
  );
};

export default Layout;
