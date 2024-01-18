"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    //fetching data from Express API endpoint
    fetch("http://localhost:8000/api/people")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

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
        a Frontend Developer.<br/> You have inspired me to learn, grow and be more
        confident. <br/> I will forever be grateful for it.
      </div>

      {people.map((person: any) => (
        <div key={person.name}>
          {person.name} - {person.occupation}
        </div>
      ))}
    </main>
  );
}
