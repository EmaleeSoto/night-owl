// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const usersController = require("./controllers/usersController");
const userVenuesController = require("./controllers/userVenuesController");
const alcoholController = require("./controllers/alcoholController");
const yelpVenuesController = require("./controllers/yelpVenuesController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/users", usersController);
app.use("/uservenues", userVenuesController);
app.use("/alcohols", alcoholController);
app.use("/yelpvenues", yelpVenuesController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Worth a Shot!");
});

app.get("*", (req, res) => {
  res.status(404).send("Not found!");
});

// EXPORT
module.exports = app;
