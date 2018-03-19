module.exports = (app) => {
    const authController = require('../controllers/auth.controller');
    const transactionController = require('../controllers/transaction.controller');

    app.get('/transaction/:accountId', authController.authRequired, transactionController.getAll);
    app.post('/transaction', authController.authRequired, transactionController.create);
    app.put('/transaction', authController.authRequired, transactionController.update);
    app.delete('/transaction', authController.authRequired, transactionController.delete);
}