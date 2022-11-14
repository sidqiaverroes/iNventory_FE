import React from "react";
import Illustration from "../images/hero.png";

function Hero() {
  return (
    <div className="wrapper">
      <div className="Hero">
        <div>
          <h1>Let's Manage Your Stuff</h1>
          <p>
            Manage everything you have more easily and regularly through the
            inventory you create. You can also view activity reports that you do
            in your inventory.
          </p>
          <button>Manage</button>
        </div>
        <img src={Illustration} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
