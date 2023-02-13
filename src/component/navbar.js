import React from "react";
import "../styling/navbar.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Introduction from "./introduction";
import Education from "./education";
import Experience from "./expirence";
import Skills from "./skils";
import Contact from "./contact";
const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <div className="navbar">
          <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Home
            </NavLink><NavLink
              to="/education"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Education
            </NavLink><NavLink
              to="/experience"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Experience
            </NavLink><NavLink
              to="/skills"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Skills
            </NavLink><NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Contact
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Introduction />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
