const mongoose = require('mongoose');
const Chance = require('chance');
const chance = new Chance();
const Account = require('../models/account.model');
const Transaction = require('../models/transaction.model');

function getAllAccountIds() {
    return Account.find().then(accounts => {
        return accounts.map(a => {
            return a.id;
        });
    })
}

function generateTransactions(num = 1) {
    let transactions = [];
    return getAllAccountIds().then(accountIds => {
        for (let i = 0; i < num; i++) {
            let transfer = !!Math.floor(Math.random() * 2);
            transactions.push({
                amount: chance.floating({min: 1, max: 10000, fixed: 2}),
                date: chance.date(),
                accountIdFrom: mongoose.Types.ObjectId(accountIds[Math.floor(Math.random() * accountIds.length)]),
                accountIdTo: transfer ? mongoose.Types.ObjectId(accountIds[Math.floor(Math.random() * accountIds.length)]) : chance.string({length: 24, pool: '0123456789'}),
                description: transfer ? 'Account Transfer' : chance.company()
            });
        }
        return transactions;
    })
}

module.exports = () => {
    return generateTransactions(1000).then(transactionsToSeed => {
        return new Promise((resolve, reject) => {
            Transaction.collection.insertMany(transactionsToSeed, (err, transactions) => {
                if (!err)
                    resolve(transactions.ops);
                else
                    reject(err);
            });
        });
    });    
};
