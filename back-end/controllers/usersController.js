const express = require("express");
const users = express.Router();
const axios = require("axios");
const {
  getUser,
  getUserbyFirebase,
  deleteUser,
  createUser,
  updateUser,
  getAllUsers,
} = require("../queries/users");

// INDEX SHOW ALL USERS
users.get("/", async (req, res) => {
  res.json({ data: await getAllUsers() });
});

// SHOW A USER BY USER ID
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user.id) {
    res.json({ success: true, data: user });
  } else {
    res.status(404).json({ success: false, data: "not found" });
  }
});

// SHOW USER BY FIREBASE ID
users.get("/firebase/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUserbyFirebase(id);
  if (user.id) {
    res.json({ success: true, data: user });
  } else {
    res.status(404).json({ success: false, data: "not found" });
  }
});

// SHOW VENUES BY USER PREFERRED CATEGORIES
users.get("/:id/preferences", async (req, res) => {
  const myUser = await getUser(req.params.id);
  const venuesByUserCategories = [];
  const categories = myUser.atmosphere.split(", ");
  for (const category of categories) {
    const yelpVenuesByCategory = await axios
      .get(
        `https://api.yelp.com/v3/businesses/search?location=NYC&categories=${category}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
        }
      )
      .then((response) => {
        return response.data.businesses;
      });
    venuesByUserCategories = [
      ...venuesByUserCategories,
      ...yelpVenuesByCategory,
    ];
  }

  res.send(venuesByUserCategories);
});

// CREATE USER
users.post("/", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.json({ success: true, data: user });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, data: "server cannot process request" });
  }
});

// UPDATE USER
users.put("/:id", async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// DELETE USER
users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  if (deletedUser) {
    if (deletedUser.id) {
      res.status(200).json({ success: true, data: deletedUser });
    } else {
      res.status(404).json({ success: false, data: "User not found" });
    }
  } else {
    console.error(deletedUser);
    res.status(500).json({ success: false, data: "server error" });
  }
});

module.exports = users;
