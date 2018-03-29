module.exports = (app) => {
    const authController = require('../controllers/auth.controller');
    const accountController = require('../controllers/account.controller');

    app.get('/account', authController.authRequired, accountController.getAll);
    app.post('/account', authController.authRequired, accountController.create);
    app.put('/account', authController.authRequired, accountController.update);
    app.delete('/account/:id', authController.authRequired, accountController.delete);
};