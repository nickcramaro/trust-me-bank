const mongoose = require('mongoose');
const Transaction = require('../models/transaction.model');

exports.getAll = (req, res) => {
    Transaction.find({accountIdFrom: mongoose.Types.ObjectId(req.params.accountId)})
        .then(transaction => {
            res.send(transaction);
        })
        .catch(err => {
            res.status(500).send({error: 'FAIL'});
        });
}

exports.create = (req, res) => {
    let newTransaction = new Transaction({
        amount: req.body.amount,
        date: Date.now(),
        accountIdTo: mongoose.Types.ObjectId(req.body.accountIdTo),
        accountIdFrom: mongoose.Types.ObjectId(req.body.accountIdFrom),
        description: 'Account Transfer'
    });
    newTransaction.save()
        .then(transaction => {
            res.send(transaction);
        })
        .catch(err => {
            res.status(500).send({error: 'FAIL'});
        });
}