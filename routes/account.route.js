module.exports = (app) => {
    const accountController = require('../controllers/account.controller');

    app.get('/account', accountController.getAll);
    app.post('/account', accountController.create);
    app.put('/account', accountController.update);
    app.delete('/account', accountController.delete);
}