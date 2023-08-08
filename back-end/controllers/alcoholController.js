const express = require("express");
const alcohol = express.Router();
const {
  getAllAlcohols,
  getAlcohol,
  getAlcoholByCategory,
  getAlcoholByType,
  getAlcoholByFlavor,
} = require("../queries/alcohols");

// INDEX SHOW ALL ALCOHOL
alcohol.get("/", async (req, res) => {
  res.json({ alcohols: await getAllAlcohols() });
});

// SHOW BY ID
alcohol.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneAlcohol = await getAlcohol(id);
  if (oneAlcohol.id) {
    res.json({ success: true, alcohol: oneAlcohol });
  } else {
    res.status(404).json({ success: false, alcohol: "not found" });
  }
});

// SHOW BY CATEGORY
alcohol.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  const allAlcohols = await getAlcoholByCategory(category);
  if (allAlcohols) {
    res.json({ success: true, alcohols: allAlcohols });
  } else {
    res.status(404).json({ success: false, alcohols: "not found" });
  }
});

// SHOW BY TYPE
alcohol.get("/type/:type", async (req, res) => {
  const { type } = req.params;
  const allAlcohols = await getAlcoholByType(type);
  if (allAlcohols) {
    res.json({ success: true, alcohols: allAlcohols });
  } else {
    res.status(404).json({ success: false, alcohols: "not found" });
  }
});

// SHOW BY FLAVOR
alcohol.get("/flavors/:flavor", async (req, res) => {
  const { flavor } = req.params;
  const allAlcohols = await getAlcoholByFlavor(flavor);
  if (allAlcohols[0]) {
    res.json({ success: true, alcohols: allAlcohols });
  } else {
    res.status(404).json({ success: false, alcohols: "not found" });
  }
});

module.exports = alcohol;
