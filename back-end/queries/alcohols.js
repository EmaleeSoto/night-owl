const db = require("../db/dbConfig.js");

const getAllAlcohols = async () => {
  try {
    return await db.any("SELECT * FROM alcohols");
  } catch (error) {
    return error;
  }
};

const getAlcohol = async (id) => {
  try {
    return await db.one("SELECT * FROM alcohols WHERE id=$1", id);
  } catch (error) {
    return error;
  }
};

const getAlcoholByCategory = async (category) => {
  try {
    return await db.any("SELECT * FROM alcohols WHERE category=$1", category);
  } catch (error) {
    return error;
  }
};

const getAlcoholByType = async (type) => {
  try {
    return await db.any("SELECT * FROM alcohols WHERE type=$1", type);
  } catch (error) {
    return error;
  }
};

const getAlcoholByFlavor = async (flavor) => {
  try {
    return await db.any(
      `SELECT * FROM alcohols WHERE flavors LIKE '%${flavor}%'`,
      flavor
    );
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAlcohols,
  getAlcohol,
  getAlcoholByCategory,
  getAlcoholByType,
  getAlcoholByFlavor,
};
