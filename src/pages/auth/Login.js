import React, { useState } from "react";
import styles from "./auth.module.scss";
import { BiArrowBack } from "react-icons/bi";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser, validateEmail } from "../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";
import { logoutUser } from "../../services/authService";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      console.log(data);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
  };

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
      <Card>
        <div className={styles.form}>
          <Link to="/" onClick={logout}>
            <span className={styles.backhome}>
              <BiArrowBack size={16} style={{ marginRight: "8px" }} />
              Home
            </span>
          </Link>

          <h2>Login</h2>

          <form onSubmit={login}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <Link className={styles.forgotpwd} to="/forgot">
              Forgot Password?
            </Link>
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>

          <span className={styles.register}>
            <p>Don't have an account?</p>
            <Link to="/register">Sign Up</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;
