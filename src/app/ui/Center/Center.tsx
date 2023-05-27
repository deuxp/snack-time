import { ReactNode } from "react";
import styles from "./Center.module.css";

interface AppProps {
  children: ReactNode, 
  border: boolean
}
// type AppProps = {  children: ReactNode}


export default function Center({ children, border }: AppProps) {
  
  return <div className={styles.container}>{children}</div>;
}
