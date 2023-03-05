import React from "react";
import ScrollingCard from "./ScrollingCard";

const Experience = () => {
  const novaders = () => {
    return (
      <>
        <div>
          <h1>2022 - 2023</h1>
          <h2>Novaders LLP</h2>
          <p>Associate software Engineer</p>
        </div>
      </>
    );
  };
  return (
    <div>
      <ScrollingCard data={novaders()}></ScrollingCard>
    </div>
  );
};

export default Experience;
