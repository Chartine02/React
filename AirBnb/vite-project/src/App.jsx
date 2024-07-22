import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data";

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  const details = Data.map((el) => {
    return (
      <Card
        img={el.coverImg}
        rating={el.stats.rating}
        reviewCount={el.stats.reviewCount}
        location={el.location}
        title={el.title}
        price={el.price}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      {details}
    </div>
  );
}
