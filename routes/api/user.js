const router = require("express").Router();
const userController = require("../../controllers/userController");


// api/user
router.route("/")
    .get(userController.signUpUser);

router.route("/:id")
    .get(userController.findById);

router.route("/pop/:id")
    .get(userController.populateUser)


module.exports = router;