const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    number: String,
    type: Number,
    amount: Number,
    userId: String
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;