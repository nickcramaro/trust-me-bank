module.exports = (app) => {
    const transactionController = require('../controllers/transaction.controller');

    app.get('/transaction', transactionController.getAll);
    app.post('/transaction', transactionController.create);
    app.put('/transaction', transactionController.update);
    app.delete('/transaction', transactionController.delete);
}