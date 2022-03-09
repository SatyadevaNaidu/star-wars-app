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
        /* Fetching data from the API */
        const response = await fetch(endpoint);
        const people = await response.json();

        console.log("check", people);
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
      {status === 0 ? <h1 style={{ color: 'yellow' }}>Loading...</h1> : null}
      {status === 1 ? <Routing people={information} /> : null}
      {status === 2 ? <h3 style={{ color: 'yellow' }}>Sorry we cannot find data</h3> : null}
    </div>
  );
}
