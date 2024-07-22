import React from "react";
import logo from "../assets/airbnb-1.png";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} className="nav--logo" />
    </nav>
  );
}
