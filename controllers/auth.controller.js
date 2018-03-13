const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = (req, res) => {
    let user = new User({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email});
    user.password = bcrypt.hashSync(req.body.password, 10);
    user
        .save()
        .then((user) => {
            res.send(user);
        })
        .catch(() => {
            res
                .status(500)
                .send({error: 'FAIL'})
        });
};

exports.login = (req, res) => {
    User
        .findOne({email: req.body.email})
        .then(user => {
            if (user) {
                if (user.comparePassword(req.body.password)) {
                    res.json({
                        token: jwt.sign({firstName: user.firstName, lastName: user.lastName, email: user.email, _id: user._id}, 'TRUST ME SECRETS')
                    });
                } else {
                    res
                        .status(500)
                        .send({error: 'FAIL'});
                }
            } else {
                res
                    .status(500)
                    .send({error: 'FAIL'});
            }
        })
        .catch(() => {
            res
                .status(500)
                .send({error: 'FAIL'});
        });
}

exports.authRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res
            .status(500)
            .send({error: 'FAIL'});
    }
}