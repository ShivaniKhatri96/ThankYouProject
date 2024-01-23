"use client";
import React, { useEffect, useState } from "react";
import styles from "./People.module.css";

interface Person {
  title: string;
  occupation: string;
}
const People: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    //fetching data from Express API endpoint
    fetch("http://localhost:8000/api/people")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  return (
    <>
      {people?.map((person: any) => (
        <div key={person.name} className={styles.card}>
          <div className={styles.title}>{person.name}</div>
          <div className={styles.description}>{person.occupation}</div>
        </div>
      ))}
    </>
  );
};

export default People;
