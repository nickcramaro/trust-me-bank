const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/trust-me');

const seedUser = require('./user.seed');
const seedAccount = require('./account.seed');
const seedTransaction = require('./transaction.seed');

seedUser().then((users) => {
    console.log(users);
    seedAccount().then((accounts) => {
        console.log(accounts);
        seedTransaction().then((transactions) => {
            console.log(transactions);
            process.exit();
        });
    });
});