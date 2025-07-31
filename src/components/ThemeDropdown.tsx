import React from "react";
import { useTheme } from "../hooks/useTheme";
import { Theme } from "../themes/ThemeContext";

const themes: Theme[] = ["theme1", "theme2", "theme3"];

export default function ThemeDropdown() {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <select value={theme} onChange={handleChange} style={styles.select}>
      {themes.map(t => (
        <option key={t} value={t} >
          {t.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

const styles = {
  select: {
    padding: "4px 8px",
    borderRadius: "10px",
    fontSize: "0.8rem",
  },
};
