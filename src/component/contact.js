import React from 'react';
import ScrollingCard from "./ScrollingCard";


const Contact = () => {
  const Contact = () => {
    return (
      <>
        <div>
          <h1>Contact</h1>
          <ul>
            <li>LinkedIn: <a href='https://www.linkedin.com/in/vandana-nayak-094/'> Vandana Nayak</a></li>
            <li>Phone: +91 9353611968</li>
            
          </ul>
        </div>
      </>
    );
  };
  return (
    <div>
      <ScrollingCard data={Contact()}></ScrollingCard>
    </div>
  );
}

export default Contact