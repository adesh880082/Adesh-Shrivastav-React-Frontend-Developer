import { useContext } from "react";
import { ThemeContext } from "../themes/ThemeContext";

export const useTheme = () => useContext(ThemeContext);