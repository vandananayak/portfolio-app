import React from "react";
import ScrollingCard from "./ScrollingCard";

const Education = () => {
  const be = () => {
    return (
      <>
        <div>
          <h1>Bachelor of Engineering</h1>
          <h2>Shri Madhwa Vadiraj Institue of Technology</h2>
          <p>Score: 7.2 CGPA</p>
        </div>
      </>
    );
  };

  const pu = () => {
    return (
      <>
        <div>
          <h1>Pre University</h1>
          <h2>Mahatma Gandhi Memorial College</h2>
          <p>Score: 69%</p>
        </div>
      </>
    );
  };
  return <>
  <ScrollingCard data={be()}></ScrollingCard>
  <ScrollingCard data={pu()}></ScrollingCard>
  </>;
};

export default Education;
