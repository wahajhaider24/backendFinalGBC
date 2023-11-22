var express = require("express");
var router = express.Router();
// const mongoose = require('mongoose');
const accountMongo = require("../models/account");

router.get("/", (req, res, next) => {
  accountMongo
    .find()
    .then((accounts) => {
      console.log(accounts, "<<");
      const addresses = accounts.map((item) => item.address);

      res.status(200).json(addresses);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});
router.get("/:address", (req, res, next) => {
  const { address } = req.params;
  accountMongo
    .find({ address: address })
    .then((account) => {
      console.log(account, "<<");

      res.status(200).json(account);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});
module.exports = router;
