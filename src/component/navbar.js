import React from "react";
import "../styling/navbar.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Introduction from "./introduction";
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
              Logo
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Introduction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
