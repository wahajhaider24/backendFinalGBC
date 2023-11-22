const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountsSchema = new Schema(
  {
    address: {
      type: String,
      required: true,
    },
    balance: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

var Accounts = mongoose.model("Accounts", accountsSchema);

Accounts.insertMany([
  {
    _id: "655d1e42ac1dc0220f7364b1",
    address: "0xAbCdEf0123456789abcdef0123456789abcdef012",
    balance: "1000.00",
  },
  {
    _id: "655d1e42ac1dc0220f7364b2",
    address: "0x0123456789abcdef0123456789abcdef01234567",
    balance: "500.50",
  },
  {
    _id: "655d1e42ac1dc0220f7364b3",

    address: "0x89abcdef0123456789abcdef0123456789abcdef0",
    balance: "750.25",
  },
  {
    _id: "655d1e42ac1dc0220f7364b4",

    address: "0x3456789abcdef0123456789abcdef01234567890a",
    balance: "1200.75",
  },
  {
    _id: "655d1e42ac1dc0220f7364b5",

    address: "0x6789abcdef0123456789abcdef01234567890123b",
    balance: "300.10",
  },
  {
    _id: "655d1e42ac1dc0220f7364b6",

    address: "0xabcdef0123456789abcdef0123456789abcdef456c",
    balance: "900.80",
  },
])
  .then(() => {
    console.log("Accounts inserted successfully");
  })
  .catch((err) => {
    console.log("Error Loading Accounts Data", err);
  });

module.exports = Accounts;
