const express = require("express");
const router = express.Router();

const showingsController = require("../controllers/showingsController");

router.post("", showingsController.addShowing);
router.get("/movie-date", showingsController.getShowingsByMovieAndDate);
router.get("/todaysShowings", showingsController.getShowingByTodaysDate);
router.get("/:showingsId", showingsController.getShowingById);
router.put("/:showingsId/add-seats", showingsController.addSeats);
router.delete("delete/:userId", showingsController.removeBookedSeats);

module.exports = router;