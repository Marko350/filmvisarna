const express = require("express");
const router = express.Router();

const screensController = require("../controllers/screensController");

router.post("", screensController.createScreen);

module.exports = router;