import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <strong>IVT</strong>
        </div>
      </div>

      <div className="nav-links">
        <span>Name</span>
        <span>Log Out</span>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default Nav;
