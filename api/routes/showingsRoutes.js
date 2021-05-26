const express = require("express");
const router = express.Router();

const showingsController = require("../controllers/showingsController");

router.post("", showingsController.addShowing);
router.get("/movie-date", showingsController.getShowingsByMovieAndDate);
router.get("/:showingsId", showingsController.getShowingById);

module.exports = router;