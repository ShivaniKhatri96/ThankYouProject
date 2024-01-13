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
    <main>
      Hello!
      {people.map((person:any) => (
        <div>{person.name} - {person.occupation}</div>
      ))}
    </main>
  );
}
