const mongoose = require('mongoose');
const Chance = require('chance');
const chance = new Chance();
const Account = require('../models/account.model');
const Tranaction = require('../models/transaction.model');

const accountIds = ['00000001','00000002','00000003','00000004','00000005','00000006', '00000007', '00000008' , '00000009', '00000010', '00000011', '00000012'];

function generateTransactions(num = 1) {
    let transactions = [];
    for (var i = 0; i < num; i++) {
        let transfer = !!Math.floor(Math.random() * 2);
        transactions.push({
            amount: chance.floating({min: 1, max: 10000, fixed: 2}),
            date: chance.date(),
            accountIdFrom: accountIds[Math.floor(Math.random() * 12)],
            accountIdTo: transfer ? accountIds[Math.floor(Math.random() * 12)] : chance.string({length: 8, pool: '0123456789'}),
            description: transfer ? 'Account Transfer' : chance.company()
        });
    }
    return transactions;
}

module.exports = () => {
    const transactionsToSeed = generateTransactions(10000);

    return new Promise((resolve, reject) => {
        Tranaction.collection.insertMany(transactionsToSeed, (err, transactions) => {
            if (!err)
                resolve(transactions);
            else
                reject(err);
        });
    });
}
