const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
    res.json({test: 'oh hey'});
});

router.post('/login', (req, res) => {
    console.log(req);
    res.json({test: 'it works'});
});

module.exports = router;