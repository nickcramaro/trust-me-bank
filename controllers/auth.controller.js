const User = require('../models/user.model');

exports.signup = (req, res) => {
    let user = new User({email: req.body.email, password: req.body.password});
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
        .findOne({email: req.body.email, password: req.body.password})
        .then(user => {
            if (user) 
                res.send(user);
            else 
                res
                    .status(500)
                    .send({error: 'FAIL'})
            })
        .catch(() => {
            res
                .status(500)
                .send({error: 'FAIL'});
        });
}