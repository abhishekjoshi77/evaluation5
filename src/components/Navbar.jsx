
import { Flex, Button, Heading, Spacer, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Navbar() {
  const { toggleColorMode } = useColorMode();
  const { theme, setTheme } = useThemeContext();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Flex p={4} boxShadow="md" align="center">
      <Heading size="md">Mini Notes</Heading>
      <Spacer />
      <Button as={Link} to="/" variant="ghost" mr={2}>Dashboard</Button>
      <Button as={Link} to="/about" variant="ghost" mr={2}>About</Button>
      <Button onClick={handleToggle}>
        Toggle {theme === "light" ? "Dark" : "Light"}
      </Button>
    </Flex>
  );
}
