const express = require("express");
const userVenues = express.Router();
const {
  getAllUserVenues,
  getVenueByUserId,
  createUserVenue,
  deleteUserVenue,
} = require("../queries/userVenues");

// INDEX SHOW ALL USER FAVORITED VENUES
userVenues.get("/", async (req, res) => {
  res.json({ data: await getAllUserVenues() });
});

// SHOW VENUE BY USER ID
userVenues.get("/:userid", async (req, res) => {
  const { userid } = req.params;
  res.json({ success: true, data: await getVenueByUserId(userid) });
});

// GET USER FAVORITE VENUE ON YELP
//Do I need this?
//https://api.yelp.com/v3/businesses
userVenues.get("/favorites/:yelpid", async (req, res) => {
  res.json({ data: await getAllUserVenues() });
});

// ADD NEW FAVORITE VENUE
userVenues.post("/addfavorite", async (req, res) => {
  try {
    res.json({ data: await createUserVenue(req.body) });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, data: "Cannot Add this Venue to Favorites" });
  }
});

// DELETE VENUE FROM FAVORITES
userVenues.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUserVenue = await deleteUserVenue(id);
  if (deletedUserVenue) {
    if (deletedUserVenue.id) {
      res.status(200).json({ success: true, data: deletedUserVenue });
    } else {
      res.status(404).json({ success: false, data: "User Venue not found" });
    }
  } else {
    res
      .status(500)
      .json({ success: false, data: "Could not process deletion request" });
  }
});

module.exports = userVenues;
