import React from "react";
import "./Receipt.css";

function Receipt(props) {
  return (
    <div className="receipt-container">
      <div className="receipt-div">
        <h2>Receipt</h2>
        <div>
          <p>
            <span>Transaction Hash:</span> {props.txnHash}
          </p>
          <p>
            <span>Block Hash:</span> {props.blockHash}
          </p>
          <p>
            <span>From:</span> {props.from}
          </p>
          <p>
            <span>To:</span> {props.to}
          </p>
          <p>
            <span>Amount:</span> {props.amount}
          </p>
          <p>
            <span>Gas used:</span> {props.gas}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
