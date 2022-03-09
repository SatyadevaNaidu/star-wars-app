import React from "react";
import "../styles/style.css";
import logo from "../assets/startwars.png";

export default function Header() {
  /* Header for the page */
  return (
    <header className="main-header">
      <img className="logo-image" src={logo} alt="Starwars logo" />
    </header>
  );
}
