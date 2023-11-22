import { React, useEffect, useState } from "react";
import axios from "axios";
import Receipt from "../Receipt/Receipt";
import "./Transfer.css";
// import jsonData from "../data.json";
import { useParams } from "react-router-dom";

function Transfer() {
  const [amount, setAmount] = useState("");
  const [transactionData, setTransactionData] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const params = useParams();
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
    return <p>No Receipt found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowReceipt(true);
  };

  const transaction = transactionData[0];

  // Render the component once the data is fetched
  return (
    <div className="body">
      <h1>Transfer </h1>
      <div className="transfer-div">
        <h2>Transfer</h2>
        {transactionData && (
          <div>
            <p>
              <span className="key-styling">From:</span> {transaction.source}
            </p>
            <p>
              <span className="key-styling">To:</span>
              {params.id ? params.id : transaction.destination}
            </p>

            <form>
              <label for="amount" className="key-styling">
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                placeholder="Enter amount"
                min="1"
                onChange={(e) => setAmount(e.target.value)}
              />
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      {showReceipt && amount !== "" && (
        <Receipt
          txnHash={transaction._id}
          blockHash={transaction.receiptHash}
          from={transaction.source}
          to={transaction.destination}
          amount={amount}
          gas={transaction.gasUsed}
        />
      )}
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

export default Transfer;
