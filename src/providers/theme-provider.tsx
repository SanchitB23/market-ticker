"use client";
import React, { createContext, useMemo, useState } from "react";

export type ThemeContextValue = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  const themeContextValue: ThemeContextValue = useMemo(
    () => ({
      isDarkMode,
      toggleTheme,
    }),
    [isDarkMode]
  );
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <html lang="en" className={isDarkMode ? "dark" : ""}>
        {children}
      </html>
    </ThemeContext.Provider>
  );
};
