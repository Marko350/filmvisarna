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
        let showings = await Showings.find(queryObj).populate('screenId').sort({ time: 1 }).exec(); // Added populate screen to get screen name in showings component
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

// Placeholder function
const addSeats = async (req, res) => {
    try {
        await Showings.findOneAndUpdate(
            { _id: req.params.showingsId },
            { $push: { bookedSeats: { $each: req.body.seats } } }
        ).exec();
        res.json({ success: "Seats added successfully" });
    } catch(err) {
        res.json({ error: err});
        console.log(err);
    }
};

const removeBookedSeats = async (req, res) => {
    try {
        let exists = await Showings.exists({ _id: req.params.showingsId });

        if(exists) {
            await Showings.findOneAndUpdate(
                { _id: req.params.showingsId },
                { $unset: { bookedSeats: req.body.seats }});
                // { $pull: { bookedSeats: req.body.seats }});
            res.json({ msg: `seats ${req.body.seats} has been deleted!`});
        }
        return;
    } catch(err) {
        res.status(400).json({ error: "Something went wrong!" });
        console.log(err);
        return;
    }
}

module.exports = {
    addShowing,
    getShowingById,
    getShowingsByMovieAndDate,
    getShowingByTodaysDate,
    addSeats,
    removeBookedSeats
}