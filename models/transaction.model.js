const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    amount: Number,
    date: Date,
    accountIdTo: Schema.Types.Mixed,
    accountIdFrom: Schema.Types.ObjectId,
    description: String
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;