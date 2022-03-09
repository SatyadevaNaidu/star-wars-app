import React, { useState } from "react";
import People from "./People";
import "../styles/style.css";

export default function Search({ people }) {
  const [searchField, setSearchField] = useState("");

  const filteredPersons = people.filter((person) => {
    return person.name.toLowerCase().includes(searchField.toLowerCase());
  });

  /* Catches string typed in search bar */
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  /* Searches for specific character */
  function searchList() {
    return <People people={filteredPersons} />;
  }

  /* Returns search results */
  return (
    <section className="search-section">
      <div className="search-input">
        <input
          className="search-value"
          type="text"
          placeholder="Search Characters"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}
