"use client";
import { useEffect, useState } from "react";
import styles from "./People.module.css";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    //fetching data from Express API endpoint
    fetch("http://localhost:8000/api/people")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  return (
    <>
      {people.map((person: any) => (
        <div key={person.name} className={styles.card}>
          <div>{person.name}</div>
          <div>{person.occupation}</div>
        </div>
      ))}
    </>
  );
};

export default People;
