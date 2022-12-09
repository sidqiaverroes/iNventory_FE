import React, { useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { forgotPassword, validateEmail } from "../../services/authService";
import { toast } from "react-toastify";
import { BiArrowBack } from "react-icons/bi";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const forgot = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Please enter an email");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
    };

    await forgotPassword(userData);
    setEmail("");
  };

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <Link to="/">
            <span className={styles.backhome}>
              <BiArrowBack size={16} style={{ marginRight: "8px" }} />
              Home
            </span>
          </Link>
          <h2>Forgot Password</h2>

          <form onSubmit={forgot}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" className="--btn --btn-primary --btn-block">
              Get Reset Email
            </button>
            <div className={styles.links}>
              <Link to="/login" className="back">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Forgot;
