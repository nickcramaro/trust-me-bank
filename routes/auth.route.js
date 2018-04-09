module.exports = (app) => {
    const authController = require('../controllers/auth.controller');

    app.post('/auth/signup', authController.signup);
    app.post('/auth/login', authController.login);
};