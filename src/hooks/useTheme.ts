import { ThemeContext, ThemeContextValue } from "@/providers/theme-provider";
import { useContext } from "react";

export const useTheme = (): ThemeContextValue => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
};
