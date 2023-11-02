const router = require('express').Router();
const locationRoute = require('./locationRoute');
const travellerRoutes = require('./travellerRoutes');

router.use('/location', locationRoute);
router.use('/traveller', travellerRoutes);

module.exports = router;
