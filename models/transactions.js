const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    source: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["SUCCESS", "FAILURE", "PENDING"], // Add possible status values
      required: true,
    },
    gasUsed: {
      type: Number,
      required: true,
    },
    receiptHash: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Transactions = mongoose.model("Transactions", transactionSchema);

Transactions.insertMany([
  {
    _id: "655d22a1ac1dc0220f7364b9",
    source: "0xAbCdEf0123456789abcdef0123456789abcdef012",
    destination: "0x0123456789abcdef0123456789abcdef01234567",
    status: "SUCCESS",
    gasUsed: 21000,
    amount: 291,
    receiptHash: "0xabcdef0123456789abcdef0123456789abcdef456",
  },
  {
    _id: "655d22a1ac1dc0220f7364ba",
    source: "0x0123456789abcdef0123456789abcdef01234567",
    destination: "0x89abcdef0123456789abcdef0123456789abcdef0",
    status: "FAILURE",
    gasUsed: 40000,
    amount: 827,
    receiptHash: "0x0123456789abcdef0123456789abcdef012345678",
  },
  {
    _id: "655d22a1ac1dc0220f7364bb",
    source: "0x89abcdef0123456789abcdef0123456789abcdef0",
    destination: "0x3456789abcdef0123456789abcdef01234567890a",
    status: "PENDING",
    gasUsed: 30000,
    amount: 1000,
    receiptHash: "0x89abcdef0123456789abcdef0123456789abcdef0",
  },
  {
    _id: "655d28e83cabb12e037cf884",
    source: "0x89abcdef0123456789abcdef0123456789abcdef0",
    destination: "0x3456789abcdef0123456789abcdef01234567890a",
    status: "PENDING",
    gasUsed: 30000,
    amount: 650,
    receiptHash: "0x89abcdef0123456789abcdef0123456789abcdef0",
  },
])
  .then(() => {
    console.log("Transactions inserted successfully");
  })
  .catch((err) => {
    console.log("Error Loading Transactions Data", err);
  });

module.exports = Transactions;
