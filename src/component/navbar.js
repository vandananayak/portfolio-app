import React from "react";
import "../styling/navbar.css";
import { BrowserRouter, NavLink } from "react-router-dom";
import RoutingLink from './routingLink';


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
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Education
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Experience
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Contact
            </NavLink>
          </div>
        </div>
        <RoutingLink></RoutingLink>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
