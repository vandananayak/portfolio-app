import React from "react";
import "../styling/introduction.css";
import Button from "@mui/material/Button";

function Introduction() {
  return (
    <>
      <div>
        Hello...
        <span className="intro">
          I am <span className="name">Vandana Nayak</span>
        </span>
        <div className="downloadButton">
          <Button variant="contained" className="Button">
            Download CV
          </Button>
        </div>
      </div>
    </>
  );
}

export default Introduction;
