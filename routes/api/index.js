const router = require("express").Router();
const reviewRoutes = require("./review");
const userRoutes = require("./user")

router.use("/review", reviewRoutes);
router.use("/user", userRoutes);
module.exports = router;