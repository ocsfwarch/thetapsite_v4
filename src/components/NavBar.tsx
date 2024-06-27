import {
  HStack,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsHouse, BsInfoCircle, BsMotherboard } from "react-icons/bs";

const NavBar = () => {
  return (
    <HStack marginBottom={4} justifyContent="flex-end" width="100%">
      {/* <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <Link to="/">
            <MenuItem icon={<Icon as={BsHouse} />}>Home</MenuItem>
          </Link>
          <Link to="aboutme">
            <MenuItem icon={<Icon as={BsInfoCircle} />}>AboutMe</MenuItem>
          </Link>
          <Link to="portfolio">
            <MenuItem icon={<Icon as={BsMotherboard} />}>Portfolio</MenuItem>
          </Link>
        </MenuList>
      </Menu> */}
      {/* <Heading fontSize="1.5rem">
        <Link to="/">The TAP Site</Link>
      </Heading> */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
