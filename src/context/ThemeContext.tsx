import { createContext, useContext, useState } from "react";

type ThemContextType = {
  isDarkMode: boolean;
  themeToggle: () => void;
};

const ThemeContext = createContext<ThemContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeToggle = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
