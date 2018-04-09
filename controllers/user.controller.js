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
    res.send({
        _id: req.user._id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        sin: req.user.sin,
        email: req.user.email
    });
};