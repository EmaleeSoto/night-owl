const express = require("express");
const userVenues = express.Router();
const {
  getAllUserVenues,
  getVenuesByUserId,
  getOneVenueByUserId,
  createUserVenue,
  deleteUserVenue,
} = require("../queries/userVenues");

// INDEX SHOW ALL USER FAVORITED VENUES
userVenues.get("/", async (req, res) => {
  res.json({ venue: await getAllUserVenues() });
});

// SHOW VENUE BY USER ID
userVenues.get("/:userid", async (req, res) => {
  const { userid } = req.params;
  res.json({ success: true, venues: await getVenuesByUserId(userid) });
});

// GET USER FAVORITE VENUE ON YELP
//Do I need this?
//https://api.yelp.com/v3/businesses
userVenues.get("/favorites/:yelpid", async (req, res) => {
  res.json({ venues: await getAllUserVenues() });
});

userVenues.get("/isfavorite/:id/:yelp_id", async (req, res) => {
  const { id, yelp_id } = req.params;
  res.json({
    favoriteVenue: await getOneVenueByUserId(id, yelp_id),
  });
});

// ADD NEW FAVORITE VENUE
userVenues.post("/addfavorite", async (req, res) => {
  try {
    res.json({ venue: await createUserVenue(req.body) });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, venue: "Cannot Add this Venue to Favorites" });
  }
});

// DELETE VENUE FROM FAVORITES
userVenues.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUserVenue = await deleteUserVenue(id);
  if (deletedUserVenue) {
    if (deletedUserVenue.id) {
      res.status(200).json({ success: true, venue: deletedUserVenue });
    } else {
      res.status(404).json({ success: false, venue: "User Venue not found" });
    }
  } else {
    res
      .status(500)
      .json({ success: false, error: "Could not process deletion request" });
  }
});

module.exports = userVenues;
