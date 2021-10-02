import React from "react";
import "../styles/style.css";

export default function DetailView({ label, text }) {
  return (
    <div className="description">
      <p className="labels">{label}</p>
      <p className="lable-text">{text}</p>
      <hr />
    </div>
  );
}
