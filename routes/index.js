const express = require("express");

const router = express.Router();

// Access homeController
const homeController = require("../controllers/home_controller");
// Accessing the home route via get method
router.get("/", homeController.home);

router.use("/project", require("./projects"));

router.use("/projects", require("./projects"));

module.exports = router;
