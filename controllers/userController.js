const db = require("../models")

module.exports = {
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    signUpUser: function (req, res) {
        //part 1
        db.User.find({ email: req.body.email })
            .then(res => {
                if (res) {
                    console.log("Email already in use.")
                } else {
                    db.User
                        .create(req.body)
                        .then(dbUser => res.json(dbUser))
                        .catch(err => res.status(422).json(err));
                }
            })
        // if email is true, do not save
        // if email is false, save new user
        //part 2
        // db.User
        //     .create(req.body)
        //     .then(dbUser => res.json(dbUser))
        //     .catch(err => res.status(422).json(err));
    },
    populateUser: function (req, res) {
        db.User
            .findById(req.params.id)
            .populate("review")
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
}

