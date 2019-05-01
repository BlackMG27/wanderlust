const db = require("../models")

module.exports = {
    findByCountryId: function (req, res) {
        db.Review
            .find(req.params.id)
            .then(dbReview => res.json(dbReview))
            .catch(err => res.status(422).json(err));
    },
    findByReviewId: function (req, res) {
        db.Review
            .find(req.params.id)
            .then(dbReview => res.json(dbReview))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        db.Review
            .create(req.body)
            .then(dbReview => res.json(dbReview))
            .catch(err => res.status(422).json(err))
    }
}