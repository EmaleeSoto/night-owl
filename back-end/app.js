// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const usersController = require("./controllers/usersController");
const userVenuesController = require("./controllers/userVenuesController");
const alcoholController = require("./controllers/alcoholController");
const barsController = require("./controllers/barsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/users", usersController);
app.use("/uservenues", userVenuesController);
app.use("/alcohols", alcoholController);
app.use("/bars", barsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Worth a Shot!");
});

app.get("*", (req, res) => {
  res.status(404).send("Not found!");
});

// EXPORT
module.exports = app;
