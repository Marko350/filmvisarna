const Movie = require("../models/Movie");
const Showings = require("../models/Showings");

const addShowing = async (req, res) => {
    let showing = await Showings.create(req.body);
    res.json(showing);
};

const getShowingById = async (req, res) => {
    await Showings.findById(req.params.showingsId).populate('movieId').populate('screenId').exec((err, showing) => {
        if (err) {
            res.status(404).json({error: err});
            return;
        }
        if (!showing) {
            res.status(404).json({error: `Could not find a showing with id: ${req.params.showingsId}`});
            return;
        }
        res.json(showing);
    });
};

const getShowingsByMovieAndDate = async (req, res) => {
    // Move this current date to a state in front end
    // Send down current date to with movieId from params to this route on page load
    let date = new Date().toISOString().slice(0, 10);
    console.log(date);
    console.log(req.body)
    let queryObj = {
        movieId: req.body.movieId,
        date: req.body.date ? req.body.date : date,
    }
    try {
        let showings = await Showings.find(queryObj).exec();
        if (!showings.length) {
            res.json({ error: 'No showings for this date' })
        }
    } catch (err) {
        res.json({ error: 'Something went wrong', err });
    }
}

const getShowingByTodaysDate = async (req, res) => {
    let queryDate = new Date().toISOString().slice(0, 10);
    let todaysShowings = await Showings.find({'date': queryDate}).exec();

    res.json(todaysShowings);
};


module.exports = {
    addShowing,
    getShowingById,
    getShowingsByMovieAndDate,
    getShowingByTodaysDate,
}