const router = require("express").Router();
const userController = require("../../controllers/userController");


// api/user
router.route("/")
    .get(userController.signUpUser);

router.route("/:id")
    .get(userController.findById);

module.exports = router;