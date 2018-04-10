module.exports = (app) => {
    const authController = require('../controllers/auth.controller');
    const faqController = require('../controllers/faq.controller');

    app.post('/faq', authController.authRequired, faqController.askQuestion);
    app.get('/faq', authController.authRequired, faqController.getFaqs);
};