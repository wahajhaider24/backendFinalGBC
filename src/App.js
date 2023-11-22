// import logo from "./logo.svg";
import "./App.css";
import Transfer from "./components/Transfer/Transfer";
import Navbar from "./components/Navbar/Navbar";
import Wallet from "./components/Wallet/Wallet";
import Addresses from "./components/Addresses/Addresses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="" Component={Wallet}></Route>
          <Route path="/transfer/:id" Component={Transfer}></Route>
          <Route path="/transfer" Component={Transfer}></Route>
          <Route path="/wallet" Component={Wallet}></Route>
          <Route path="/addresses" Component={Addresses}></Route>
          <Route path="/transactions" Component={Transactions}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
