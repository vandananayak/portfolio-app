import React from "react";
import ScrollingCard from "./ScrollingCard";

const project = () => {
  const project = () => {
    return (
      <>
        <div>
          <h1>Project</h1>
          <h2>Personal Project</h2>
          <ul>
            <li>
              Portfolio using React published in github
            </li>
          </ul>
        </div>
      </>
    );
  };
  return (
    <div>
      <ScrollingCard data={project()}></ScrollingCard>
    </div>
  );
};

export default project;
