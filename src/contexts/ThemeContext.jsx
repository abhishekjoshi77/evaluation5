
import { createContext, useContext, useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme !== colorMode) {
      toggleColorMode();
    }
    localStorage.setItem("theme", theme);
  }, [theme, colorMode, toggleColorMode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
