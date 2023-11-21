var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const transactionMongo=require('../models/transactions');

router.get('/', (req, res, next) => {
    transactionMongo.find()
      .then((transactions) => {
       
      
        res.status(200).json(transactions);
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
      
  })
  .post('/sendTransaction', async (req, res, next) => {
    try{

    console.log(req.body)
    const newTransaction = new transactionMongo(req.body);
    const savedTransaction = await newTransaction.save();
    res.json(savedTransaction);

    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: 'INTERNAL SERVER ERROR' });
    }
      
  });
  module.exports = router;