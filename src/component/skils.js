import React from 'react'
import ScrollingCard from "./ScrollingCard";


const Skills = () => {
  const skills = () => {
    return (
      <>
        <div>
          <h1>Skills</h1>
          <ul>
            <li>HTML</li>
            <li>CSS, Media Query</li>
            <li>Typescript</li>
            <li>Angular</li>
          </ul>
        </div>
      </>
    );
  };
  return (
    <div>
      <ScrollingCard data={skills()}></ScrollingCard>
    </div>
  );
}

export default Skills