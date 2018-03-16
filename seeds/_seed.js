const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const seedUser = require('./user.seed');
const seedAccount = require('./account.seed');
const seedTransaction = require('./transaction.seed');

seedUser().then((users) => {
    console.log(users);
    seedAccount(users).then((accounts) => {
        console.log(accounts);
        seedTransaction().then((transactions) => {
            console.log(transactions);
            process.exit();
        });
    });
});