const express = require("express");
const yelpVenues = express.Router();
const axios = require("axios");

yelpVenues.get("/:id", async (req, res) => {
  const yelpResponse = await axios.get(
    `https://api.yelp.com/v3/businesses/${req.params.id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        // Origin: "localhost",
        // withCredentials: true,
      },
    }
  );
  res.send(yelpResponse.data);
});

yelpVenues.get("/reviews/:id", async (req, res) => {
  const yelpResponse = await axios.get(
    `https://api.yelp.com/v3/businesses/${req.params.id}/reviews?limit=10&sort_by=yelp_sort`,
    {
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        // Origin: "localhost",
        // withCredentials: true,
      },
    }
  );
  res.send(yelpResponse.data);
});

module.exports = yelpVenues;
