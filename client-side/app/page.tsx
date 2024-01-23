"use client";
import styles from "./page.module.css";
import People from "./components/People";

export default function Home() {
  return (
    <main className={styles.pageLayout}>
      <div className={styles.card}>
        <img
          src="/assets/thankyou-image.jpg"
          alt="Thank you card"
          className={styles.image}
        />
      </div>
      <div className={styles.detail}>
        A huge Thank you to everyone who has helped me in my journey of becoming
        a Frontend Developer.
        <br /> You have inspired me to learn, grow and be more confident. <br />{" "}
        I will forever be grateful for it.
      </div>
      <People />
    </main>
  );
}
