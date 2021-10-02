import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Routing from "./components/Routing";
import "./styles/style.css";

export default function App() {
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  const endpoint = "https://swapi.dev/api/people";
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(endpoint, { mode: "cors" });
        const people = await response.json();
        console.log("oredr", people);
        setInformation(people.results);
        setStatus(1);
      } catch {
        setStatus(2);
      }
    };

    getData();
  }, []);

  return (
    <div className="home-page">
      <header>
        <Header />
      </header>
      {status === 0 ? <p>Loading...</p> : null}
      {status === 1 ? <Routing people={information} /> : null}
      {status === 2 ? <p>Sorry we cannot find data</p> : null}
    </div>
  );
}