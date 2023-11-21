const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//reference to category and user is added into the carSchema

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
            enum: ['SUCCESS', 'FAILURE', 'PENDING'], // Add possible status values
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
    },
    {
      timestamps: true,
    }
  );


var Trasnsactions= mongoose.model('Transactions', transactionSchema);

module.exports = Trasnsactions;