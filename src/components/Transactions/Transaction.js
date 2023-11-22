import React from "react";
import "./Transactions.css";

function Transaction(props) {
  return (
    <div className="receipt-div">
      <div>
        <p>
          <span className="key-styling">Transaction Hash:</span>{" "}
          {props.receiptHash}
        </p>
        <p>
          <span className="key-styling">Status:</span> {props.status}
        </p>
        <p>
          <span className="key-styling">Timestamp:</span> {props.time}
        </p>
        <p>
          <span className="key-styling">From:</span> {props.from}
        </p>
        <p>
          <span className="key-styling">To:</span> {props.to}
        </p>
        <p>
          <span className="key-styling">Amount:</span> {props.amount} ETH
        </p>
        <p>
          <span className="key-styling">Gas used:</span> {props.gas}
        </p>
      </div>
    </div>
  );
}

export default Transaction;
