const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Traveller, Trip, Location } = require('../../models');

// GET all Traveller Data w/o associated trips
router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll();
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
