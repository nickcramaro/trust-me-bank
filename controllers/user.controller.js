const User = require('../models/user.model');

exports.searchUsersByEmail = (req, res) => {
    User.find({email: {$regex: `.*${req.body.emailSearch}.*`}})
        .then((results) => {
            res.send(
                results.map(user => ({firstName: user.firstName, lastName: user.lastName, email: user.email}))
            );
        })
        .catch(() => {
            res.status(500).send({error: 'FAIL'});
        });

};

exports.getLoggedInUser = (req, res) => {
    User.find({_id: req.user._id})
        .then((results) => {
            res.send(
                results.map(user => ({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    sin: user.sin,
                    email: user.email
                }))
            );
        })
        .catch(() => {
            res.status(500).send({error: 'FAIL'});
        });

};