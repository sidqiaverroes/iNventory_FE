import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
const INV_URL = "/inv";

function Inventory() {
  const [invs, setInvs] = useState([]);

  useEffect(() => {
    const fetchInvs = async () => {
      try {
        const response = await axios.get(INV_URL);
        setInvs(response.data);
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchInvs();
  }, []);

  //   const invs = [
  //     {
  //       id: 1,
  //       title: "Foods",
  //     },
  //     {
  //       id: 2,
  //       title: "Furniture",
  //     },
  //     {
  //       id: 3,
  //       title: "Vehicle",
  //     },
  //   ];

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
