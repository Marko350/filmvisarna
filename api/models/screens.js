const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const screenSchema = new Schema({
    name: String,
    rows: [String],
    seatsPerRow: Number
});

const Screen = mongoose.model("Screen", screenSchema);

module.exports = Screen;