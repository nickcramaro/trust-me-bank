const Account = require('../models/account.model');

exports.getAll = (req, res) => {
    Account.find({user_id: req.user._id})
        .then(account => {
            res.send(account);
        })
        .catch(err => {
            res.status(500).send({error: 'FAIL'});
        });
}

exports.create = (req, res) => {
    let newAccount = Account({
        type: req.body.type,
        amount: req.body.amount,
        user_id: req.user._id
    });
    newAccount.save()
        .then(account => {
            res.send(account);
        })
        .catch(err => {
            res.status(500).send({error: 'FAIL'});
        });
}

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
    
}

exports.delete = (req, res) => {
    console.log(req.params.id);
    Account.findOneAndRemove({_id: req.params.id})
        .then(account => {
            res.send(account);
        })
        .catch(err => {
            res.status(500).send({error: 'FAIL'});
        });
}