const Faq = require('../models/faq.model');

exports.askQuestion = (req, res) => {
    let newFaq = Faq({
        question: req.body.question
    });
    newFaq.save()
        .then(faq => {
            res.send(faq);
        })
        .catch(err => {
            res.status(500).send({error: 'FAIL'});
        });
};

exports.getFaqs = (req, res) => {
    Faq.find({})
        .then((faqs) => {
            res.send(faqs.reverse());
        })
        .catch(() => {
            res.status(500).send({error: 'FAIL'});
        });
};