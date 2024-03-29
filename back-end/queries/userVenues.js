const db = require("../db/dbConfig.js");

const getAllUserVenues = async () => {
  try {
    return await db.any("SELECT * FROM user_venues");
  } catch (error) {
    return error;
  }
};

const getVenuesByUserId = async (id) => {
  try {
    return await db.any("SELECT * FROM user_venues WHERE user_uid=$1", id);
  } catch (error) {
    return error;
  }
};

const getOneVenueByUserId = async (id, yelp_id) => {
  try {
    return await db.one(
      "SELECT * FROM user_venues WHERE user_uid=$1 AND yelp_id=$2",
      [id, yelp_id]
    );
  } catch (error) {
    return error;
  }
};

const createUserVenue = async ({ user_uid, yelp_id, name, image }) => {
  try {
    return await db.one(
      "INSERT INTO user_venues (user_uid, yelp_id, name, image) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_uid, yelp_id, name, image]
    );
  } catch (error) {
    return error;
  }
};

const deleteUserVenue = async (id) => {
  try {
    return await db.one("DELETE FROM user_venues WHERE id=$1 RETURNING *", id);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUserVenues,
  getVenuesByUserId,
  getOneVenueByUserId,
  createUserVenue,
  deleteUserVenue,
};
