import { React, useEffect, useState } from "react";
import axios from "axios";
// import jsonData from "./../transactions.json";
import "./Transactions.css";
import Transaction from "./Transaction";

function Transactions() {
  const [transactionData, setTransactionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1000/transactions")
      .then((res) => {
        setTransactionData(res.data);
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

  if (transactionData.length === 0) {
    return <p>No Transactions found.</p>;
  }
  return (
    <div className="receipt-container">
      <h1>Transaction History</h1>
      {transactionData.map((e) => {
        return (
          <Transaction
            receiptHash={e.receiptHash}
            status={e.status}
            time={e.createdAt}
            from={e.source}
            to={e.destination}
            amount={e.amount}
            gas={e.gasUsed}
          />
        );
      })}
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
  );
}

export default Transactions;
