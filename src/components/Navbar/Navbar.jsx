import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="innerElements">
          <Link to="/transactions" className="nav-link">
            Transactions
          </Link>
        </div>
        <div className="innerElements">
          <Link to="/addresses" className="nav-link">
            Addresses
          </Link>
        </div>
        <div className="innerElements">
          <Link to="/transfer" className="nav-link">
            Transfer
          </Link>
        </div>
        <div className="innerElements">
          <Link to="/wallet" className="nav-link">
            Wallet
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
