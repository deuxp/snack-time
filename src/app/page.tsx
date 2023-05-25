import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}></div>
      <ul className={styles.list}>
        <li>home</li>
        <li>menu</li>
        <li>order</li>
      </ul>
    </main>
  );
}
