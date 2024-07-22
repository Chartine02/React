import React from "react";
import grid from "../assets/Group-77.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={grid} className="nav--logo" />
      <h1>Online Experience</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
