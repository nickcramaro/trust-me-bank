const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/signup', (req, res) => {
    let user = new User({email: req.body.email, password: req.body.password});
    user.save().then(() => console.log('it works'));
    res.json({test: 'it works'});
});

router.post('/login', (req, res) => {
    console.log(req.body);

    User.findOne({email: req.body.email, password: {$ne: 1}}, (err, res) => {
        console.log('all good yo', res)
    });
    
    res.json({test: 'it works'});
});

module.exports = router;