import styles from "./Page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <h1>About Us</h1>
      <p>This app demonstrates dynamic theming using React Context and CSS Variables.</p>
    </div>
  );
}
