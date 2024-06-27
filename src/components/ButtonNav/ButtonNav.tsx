import { Button, HStack, Icon } from "@chakra-ui/react";
import { BsInfoCircle, BsMotherboard } from "react-icons/bs";
import { Link } from "react-router-dom";

const ButtonNav = () => {
  return (
    <HStack mt={2}>
      <Link to="aboutme">
        <Button borderRadius="1.5rem" leftIcon={<Icon as={BsInfoCircle} />}>
          About Me
        </Button>
      </Link>
      <Link to="portfolio">
        <Button borderRadius="1.5rem" leftIcon={<Icon as={BsMotherboard} />}>
          Portfolio
        </Button>
      </Link>
    </HStack>
  );
};

export default ButtonNav;
