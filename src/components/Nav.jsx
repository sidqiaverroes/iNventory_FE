import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">
          <strong>IVT</strong>
        </div>
      </div>

      <div class="nav-links">
        <span>Name</span>
        <span>Log Out</span>
        <a href="/">Sign Up</a>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default Nav;
