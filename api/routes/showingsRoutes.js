const express = require("express");
const router = express.Router();

const showingsController = require("../controllers/showingsController");

router.post("", showingsController.addShowing);

module.exports = router;