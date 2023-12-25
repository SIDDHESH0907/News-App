import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-main">
        <div className="navbar-left">
          <div className="logo">News Wave</div>
        </div>
        <div className="navbar-mid">
          <ul className="ulist">
            <li>Sports</li>
            <li>Finance</li>
            <li>Technology</li>
            <li>Politics</li>
          </ul>
        </div>
        <div className="navbar-right">
          <input className="search" type="text" placeholder="Search..." />
        </div>
      </div>
    </>
  );
}

export default Navbar;
