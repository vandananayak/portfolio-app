import React from "react";
import Introduction from "./introduction";
import Education from "./education";
import Experience from "./expirence";
import Skills from "./skils";
import Contact from "./contact";
import { Routes, Route } from "react-router-dom";

export const RoutingLink = () => {
  return (
    <div className="component">
      <Routes>
        <Route exact path="/" element={<Introduction />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default RoutingLink;
