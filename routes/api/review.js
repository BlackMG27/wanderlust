const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");
const codeController = require("../../controllers/codeController");

//api/review
router.route("/")
    .post(reviewController.create);

// api/review/:id
router.route("/:id")
    .post(reviewController.findByReviewId);

// api/review/list/:id
router.route("/list/:id")
    .get(reviewController.findByCountryId);

// api/review/grab/:country
router.route("/grab/:country")
    .get(codeController.countryCodeFind);

// api/review/avatar/:name
router.route("/avatar/:name")
    .get(codeController.getGenericAvatar);

// api/review/code/all
router.route("/code/all")
    .get(reviewController.findAllCodes);

module.exports = router;