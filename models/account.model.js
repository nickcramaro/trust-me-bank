const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    name: String,
    type: Number,
    amount: Number,
    user_id: Schema.Types.ObjectId
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;