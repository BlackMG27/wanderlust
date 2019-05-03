const db = require("../models")

module.exports = {
    findByCountryId: function (req, res) {
        db.Review
            .findById(req.params.id)
            .then(dbReview => res.json(dbReview))
            .catch(err => res.status(422).json(err));
    },
    findByReviewId: function (req, res) {
        db.Review
            .findById(req.params.id)
            .then(dbReview => res.json(dbReview))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        console.log(req.body)
        db.Review
            .create(req.body.data)
            .then(dbReview => { return db.User.findOneAndUpdate({ _id: req.body.data.userId }, { $push: { review: dbReview._id } }, { new: true }) })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err))
    }
}