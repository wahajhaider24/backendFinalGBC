import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Addresses.css";

function Addresses() {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1000/accounts")
      .then((res) => {
        setAddresses(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (addresses.length === 0) {
    return <p>No addresses found.</p>;
  }
  return (
    <>
      <div className="body">
        <h1>Blockchain Node Addresses</h1>
        <div className="transfer-div">
          {addresses.map((item, index) => (
            <div className="address" key={index}>
              <Link to={`/transfer/${item}`}>
                <h2>{item}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Addresses;
