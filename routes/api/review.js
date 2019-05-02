const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

//api/review
router.route("/")
    .post(reviewController.create);

// api/review/:id
router.route("/:id")
    .get(reviewController.findByReviewId);

// api/review/list/:id
router.route("/list/:id")
    .get(reviewController.findByCountryId);

module.exports = router;