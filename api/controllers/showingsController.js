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
    let queryObj = {
        movieId: req.query.movieId,
        date: req.query.date,
    }

    try {
        // Add sort by time when we have more than one showing on the same date
        let showings = await Showings.find(queryObj).sort({ time: 1 }).exec();
        if (!showings.length) {
            res.json({ error: 'No showings for this date' });
            return;
        } else {
            res.json(showings);
            return;
        }
    } catch (err) {
        res.json({ error: 'Something went wrong', err });
        return;
    }
}

const getShowingByTodaysDate = async (req, res) => {
    let queryDate = new Date().toISOString().slice(0, 10);
    let todaysShowings = await Showings.find({'date': queryDate}).populate('movieId', 'title poster').exec();
    if (!todaysShowings.length) {
        res.json({ error: 'There are no showings today' });
        return;
    } else {
        res.json(todaysShowings);
        return;
    }
};


module.exports = {
    addShowing,
    getShowingById,
    getShowingsByMovieAndDate,
    getShowingByTodaysDate,
}