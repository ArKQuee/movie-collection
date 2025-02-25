const express = require("express");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");
const connectDB = require("./src/config/db");
const movieRoutes = require("./src/routes/movieRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json());
app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => {
    res.send("Movie Collection API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http//localhost:${PORT}`));