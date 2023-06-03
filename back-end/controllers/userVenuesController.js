const express = require("express");
const userVenues = express.Router();
const {
  getAllUserVenues,
  getVenueByUserId,
  createUserVenue,
  deleteUserVenue,
} = require("../queries/userVenues");

// INDEX SHOW ALL USER FAVORITED Venues
userVenues.get("/", async (req, res) => {
  const allUserVenues = await getAllUserVenues();
  res.json({ data: allUserVenues });
});

// SHOW BY USER ID
userVenues.get("/:userid", async (req, res) => {
  const { userid } = req.params;
  const userLikedVenues = await getVenueByUserId(userid);
  res.json({ success: true, data: userLikedVenues });
});

// GET USER FAVORITE Venue ON YELP
//https://api.yelp.com/v3/businesses
userVenues.get("/favorites/:yelpid", async (req, res) => {
  const allUserVenues = await getAllUserVenues();
  res.json({ data: allUserVenues });
});

//POST
userVenues.post("/addfavorite", async (req, res) => {
  try {
    const newUserVenue = await createUserVenue(req.body);
    res.json({ data: newUserVenue });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, data: "server cannot process request" });
  }
});

//DELETE
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
    console.error(deletedUserVenue);
    res.status(500).json({ success: false, data: "server error" });
  }
});

module.exports = userVenues;
