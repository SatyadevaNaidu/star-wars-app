import React from "react";
import "../styles/style.css";
import logo from "../assets/startwars.png";

export default function Header() {
  return (
    <header className="main-header">
      <img className="logo-image" src={logo} alt="TrackIt logo" />
    </header>
  );
}
