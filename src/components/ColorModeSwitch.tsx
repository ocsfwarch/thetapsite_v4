import {
  HStack,
  Icon,
  Show,
  Switch,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import {
  BsEmojiSunglasses,
  BsFillMoonStarsFill,
  BsMoonStars,
} from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Tooltip label="Toggle dark and light mode" placement="left">
      <HStack marginRight={2}>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        ></Switch>
        <Show above="md">
          {colorMode !== "dark" && <Icon as={BsEmojiSunglasses} mr={1} />}
          {colorMode === "dark" && <Icon as={BsMoonStars} mr={1} />}
          {/* <Text whiteSpace="nowrap">
            {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
          </Text> */}
        </Show>
      </HStack>
    </Tooltip>
  );
};

export default ColorModeSwitch;
