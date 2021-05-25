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


module.exports = {
    addShowing,
    getShowingById
}