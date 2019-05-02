const db = require("../models")

module.exports = {
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    signUpUser: function (req, res) {
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    populateUser: function (req, res) {
        db.User
            .findById(req.params.id)
            .populate("review")
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
}

