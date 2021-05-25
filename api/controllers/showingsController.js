const Showings = require("../models/Showings");

const addShowing = async (req, res) => {
    let showing = await Showings.create(req.body);
    res.json(showing);
};

module.exports = {
    addShowing
}