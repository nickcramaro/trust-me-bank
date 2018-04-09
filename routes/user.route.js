module.exports = (app) => {
    const authController = require('../controllers/auth.controller');
    const userController = require('../controllers/user.controller');

    app.post('/user/search', authController.authRequired, userController.searchUsersByEmail);
    app.get('/user', authController.authRequired, userController.getLoggedInUser);
};