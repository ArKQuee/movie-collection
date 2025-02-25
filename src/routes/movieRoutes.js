const express = require("express");
const { addMovie, getMovies, updateMovie, deleteMovie } = require("../controllers/movieController");

const router = express.Router();

router.post("/", addMovie);
router.get("/:id?", getMovies);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;