import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/hero.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">IVT</div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <Link to="/login">
                <button className="--btn --btn-primary">Login</button>
              </Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Let’s manage your stuff</h2>
          <p>
            Inventory system to control and manage proucts in the warehouse to
            help you develop your business.
          </p>
          <div className="hero-buttons">
            <Link to="/dashboard">
              <button className="--btn --btn-primary"> Manage </button>
            </Link>
          </div>
        </div>

        <img className="hero-image" src={heroImg} alt="Inventory" />
      </section>
    </div>
  );
};

// const NumberText = ({ num, text }) => {
//   return (
//     <div className="--mr">
//       <h3 className="--color-white">{num}</h3>
//       <p className="--color-white">{text}</p>
//     </div>
//   );
// };

export default Home;
