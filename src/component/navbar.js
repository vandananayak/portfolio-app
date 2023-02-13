import React, { useState } from "react";
import "../styling/navbar.css";
const Navbar = () => {
  const navList = ["Skills", "Projects", "Experience", "Contact"];
  const renderNavList = [];
  const [active, setActive] = useState("");
  navList.forEach((nav) => {
    renderNavList.push(
      <div
        onClick={() => {
          setActive(nav);
        }}
        className={active == nav ? "active" : ""}
      >
        {nav}
      </div>
    );
  });
  return (
    <div className="container">
      <div className="navbar">
        <span className="home">Portfolio</span>
        {renderNavList}
      </div>
    </div>
  );
};

export default Navbar;
