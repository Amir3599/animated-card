import Image from "next/image";
import styles from "./page.module.css";
import { AnimatedCard } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div></div>
      </div>

      <div className={styles.center}>
        <AnimatedCard />
      </div>
    </main>
  );
}
