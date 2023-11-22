import { React, useEffect, useState } from "react";
import axios from "axios";

import "./Wallet.css";

const Wallet = () => {
  const [addresses, setAddresses] = useState([]);
  const [balance, setBalance] = useState([]);
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

  const walletAddress = addresses[0];
  console.log(walletAddress);

  useEffect(() => {
    axios
      .get(`http://localhost:1000/accounts/${walletAddress}`)
      .then((res) => {
        setBalance(res.data[0].balance);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [walletAddress]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (addresses.length === 0) {
    return <p>No addresses found.</p>;
  }
  return (
    <>
      <div className="body">
        <h1>My Wallet</h1>
        <div className="wallet-div">
          <div className="address">
            <h2 className="key-styling">Address:</h2>
            <h2>{walletAddress}</h2>
          </div>
          <div className="address">
            <h2 className="key-styling">Balance:</h2> <h2>${balance}</h2>{" "}
            <h2>ETH</h2>
          </div>
        </div>
        <div className="footer">
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/athika-fatima-1a59121aa/"
              className="key-styling"
            >
              Athika Fatima
            </a>{" "}
            &{" "}
            <a
              href="https://www.linkedin.com/in/syed-wahaj-haider-2785a0184/"
              className="key-styling"
            >
              Wahaj Haider
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Wallet;
