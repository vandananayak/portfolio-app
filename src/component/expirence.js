import React from "react";
import ScrollingCard from "./ScrollingCard";

const Experience = () => {
  const novaders = () => {
    return (
      <>
        <div>
          <h1>2022 - 2023</h1>
          <h2>Company: Novaders LLP</h2>
          <p>Position: Associate software Engineer</p>
          <p>Project: Ozust </p>
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
