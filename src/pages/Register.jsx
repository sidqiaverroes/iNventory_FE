import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth">
      <div className="auth-container">
        <form>
          <h1>Register</h1>
          <input type="text" placeholder="username"></input>
          <input type="text" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <button>Register</button>
        </form>
        <span>
          Do You have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
