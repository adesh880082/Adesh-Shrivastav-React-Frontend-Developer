import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function Sidebar() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen(); // initial run
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Only render for theme2
  if (theme !== "theme2" || isMobile) return null;

  return (
    <aside style={styles.sidebar}>
      <h2>Sidebar</h2>
      <ul style={styles.list}>
        <li>All Products</li>
        <li>Electronics</li>
        <li>Fashion</li>
        <li>Home</li>
      </ul>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    backgroundColor: "#1c1c1c",
    color: "#fff",
    padding: "1rem",
    minHeight: "100vh",
    position: "fixed" as const,
    top: "60px", // below the header
    left: 0,
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "1rem",
    lineHeight: "2rem",
  },
};
