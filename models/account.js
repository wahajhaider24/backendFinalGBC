const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountsSchema= new Schema(
    {
        address: {
            type:String,
            required: true,
        },
        balance: {
            type:String,
            required: true,
        }

    },
    {
        timestamps: true,
      }
)

var Accounts= mongoose.model('Accounts', accountsSchema);

module.exports = Accounts;
