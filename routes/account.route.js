const express = require('express');
const router = express.Router();

const User = require('../models/user.model');
const Account = require('../models/account.model');

router.get('/', (req, res) => {
    res.send({ok: 'ok'});
});

router.post('/', (req, res) => {
    res.send({ok: 'ok'});
});

router.put('/', (req, res) => {
    res.send({ok: 'ok'});
});

router.delete('/', (req, res) => {
    res.send({ok: 'ok'});s
});

module.exports = router;