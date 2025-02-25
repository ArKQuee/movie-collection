const Movie = require("../models/movieModel");


exports.addMovie = async (req, res) => {
    try {
        const { title, director, genre, releaseYear, availableCopies } = req.body;
        if (!title || !director || !genre || availableCopies === undefined) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newMovie = new Movie({ title, director, genre, releaseYear, availableCopies });
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};


exports.getMovies = async (req, res) => {
    try {
        const { id } = req.params;
        const movies = id ? await Movie.findById(id) : await Movie.find();
        if (!movies) return res.status(404).json({ message: "Movie not found" });
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};


exports.updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMovie) return res.status(404).json({ message: "Movie not found" });
        res.json(updatedMovie);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};


exports.deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMovie = await Movie.findByIdAndDelete(id);
        if (!deletedMovie) return res.status(404).json({ message: "Movie not found" });
        res.json({ message: "Movie deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};