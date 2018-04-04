const mongoose = require('mongoose');
const Transaction = require('../models/transaction.model');
const User = require('../models/user.model');
const Account = require('../models/account.model');

exports.findRecipient = (req, res) => {
    User.find({email: {$regex: `.*${req.body.emailSearch}.*`}})
        .then((results) => {
            res.send(results);
        })
        .catch(() => {
            res.status(500).send({error: 'FAIL'});
        });

};

exports.getAll = (req, res) => {
    Transaction.find({accountIdFrom: mongoose.Types.ObjectId(req.params.accountId)})
        .then(transaction => {
            res.send(transaction);
        })
        .catch(() => {
            res.status(500).send({error: 'FAIL'});
        });
};

exports.create = (req, res) => {
    if(req.body.amount < 1) {
        res.status(400).send({error: 'NEGATIVE_AMOUNT'});
    }

    let findUserPromise =  User.findOne({email: req.body.recipientEmail});

    findUserPromise
        .catch(() => {
            res.status(404).send({error: 'RECIPIENT_NOT_FOUND'});
        });

    let getAccountQuery = id => ({userId: mongoose.Types.ObjectId(id)});
    findUserPromise
        .then((recipient) => {
            return Promise.all([
                Account.update(getAccountQuery(req.user._id), {$inc: {amount: req.body.amount * -1}}),
                Account.update(getAccountQuery(recipient._id), {$inc: {amount: req.body.amount}})
            ]);
        })
        .then(() => Account.findOne(getAccountQuery(req.user._id)))
        .then((userAccount) => {
            res.status(200).send(userAccount);
        })
        .catch((e) => {
            console.error(e);
            res.status(500).send({error: 'TRANSFER_ERROR'});
        });

};