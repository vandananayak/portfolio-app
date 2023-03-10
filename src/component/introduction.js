import React from "react";
import "../styling/introduction.css";
import Button from "@mui/material/Button";
import ExampleDoc from '../asset/portfolio.pdf'

function Introduction() {
  return (
    <>
      <h1>
        Hello...
        <span className="intro">
          I am <span className="name">Vandana Nayak</span>
        </span>
        <div className="downloadButton">
          <a href={ExampleDoc} download="Vandana_Nayak">
            <Button variant="contained" className="Button">
              Download CV
            </Button>
          </a>
        </div>
      </h1>
    </>
  );
}

export default Introduction;
