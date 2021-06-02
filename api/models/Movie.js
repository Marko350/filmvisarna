const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    actors: [String],
    genre: String,
    length: Number,
    year: Number,
    ageLimit: Number,
    description: String,
    language: String,
    subtitles: String,
    poster: String,
    trailer: String,
    price: Number,
    coverImg: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;