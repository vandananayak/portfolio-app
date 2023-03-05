import React from "react";

const ScrollingCard = (props) => {
  return (
    <div>
      <div className="card">
        <div className="scrolling">{props.data}</div>
      </div>
    </div>
  );
};

export default ScrollingCard;
