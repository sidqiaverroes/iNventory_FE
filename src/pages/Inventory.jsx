import React from "react";
import { Link } from "react-router-dom";

function Inventory() {
  const invs = [
    {
      id: 1,
      title: "Foods",
    },
    {
      id: 2,
      title: "Furniture",
    },
    {
      id: 3,
      title: "Vehicle",
    },
  ];

  return (
    <div className="wrapper">
      <div className="cards">
        {invs.map((inv) => (
          <Link className="link" to={`/item/ ${invs.id}`}>
            <div className="card" key={invs.id}>
              <h1>{inv.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Inventory;
