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
    res.send({ok: 'ok'});
}

exports.update = (req, res) => {
    res.send({ok: 'ok'});
}

exports.delete = (req, res) => {
    res.send({ok: 'ok'});
}