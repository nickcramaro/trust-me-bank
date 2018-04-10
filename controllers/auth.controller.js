const User = require('../models/user.model');
const Account = require('../models/account.model');
const Raven = require('raven');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = (req, res) => {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        sin: req.body.sin,
        email: req.body.email
    });
    user.password = bcrypt.hashSync(req.body.password, 5);
    user
        .save()
        .then((user) => {
            let defaultAccount = new Account({name: 'Savings', type: 0, amount: 5, userId: user._id});
            return defaultAccount.save();
        })
        .then(() => res.send(user))
        .catch((err) => {
            console.error(err);
            res
                .status(500)
                .send({error: 'FAIL'});
        });
};

exports.login = (req, res) => {
    User
        .findOne({email: req.body.email})
        .then(user => {
            if (user && user.comparePassword(req.body.password)) {
                let token = jwt.sign({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    sin: user.sin,
                    email: user.email,
                    _id: user._id
                }, process.env.SECRET);

                //res.json({token});
                res.status(200)
                    .cookie('sessionToken', token)
                    .send('success');
            } else {
                Raven.captureException(new Error("Invalid Login: Invalid"), {
                    extra: {
                        email: req.body.email,
                        _id: user._id
                    },
                });

                return Promise.reject();
            }
        })
        .catch(() => {
            Raven.captureException(new Error("Invalid Login: No User"), {
                extra: {
                    email: req.body.email
                },
            }, function () {
                res
                    .status(400)
                    .send({error: 'FAIL'});
            });
        });
};

exports.authRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res
            .status(401)
            .send({error: 'UNAUTHORIZED'});
    }
};