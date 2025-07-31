import React from "react";
import ThemeDropdown from "./ThemeDropdown";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header" style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>
      <ThemeDropdown />
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: "60px",
    borderBottom: "1px solid #ccc",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "inherit",
  },
};
