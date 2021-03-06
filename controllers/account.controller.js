const Account = require('../models/account.model');

exports.getAll = (req, res) => {
    Account.find({userId: req.user._id})
        .then(account => {
            res.send(account);
        })
        .catch(err => {
            res.status(500).send({error: 'FAIL'});
        });
};

exports.create = (req, res) => {
    let newAccount = Account({
        name: req.body.name,
        type: req.body.type,
        amount: req.body.amount,
        userId: req.user._id
    });
    newAccount.save()
        .then(account => {
            res.send(account);
        })
        .catch(err => {
            res.status(500).send({error: 'FAIL'});
        });
};

exports.update = (req, res) => {
    Account.findById(req.body.id)
        .then(account => {
            account.amount = req.body.amount;
            account.save()
                .then(account => {
                    res.send(account);
                })
                .catch(err => {
                    res.status(500).send({error: 'FAIL'});
                });
        })
        .catch(err => {
            res.status(500).send({error: 'FAIL'});
        });
};

exports.delete = (req, res) => {
    Account.findOneAndRemove({_id: req.params.id})
        .then(account => {
            res.send(account);
        })
        .catch(err => {
            res.status(500).send({error: 'FAIL'});
        });
};