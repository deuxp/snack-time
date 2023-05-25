import Main from "./ui/Main/Main";
import Nav from "./components/Nav/Nav";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Nav/>
      <Main>
      <div className={styles.title}></div>
        <ul className={styles.list}>
        <li>home</li>
        <li>menu</li>
        <li>order</li>
        </ul>
    </Main>
    </>
  );
}
