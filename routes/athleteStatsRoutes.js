const router = require('express').Router();
const athleteStatsController = require('../controllers/athleteStatsController');

router
  .route('/')
  .get(athleteStatsController.stats)
  .patch(athleteStatsController.statsUpdate);

module.exports = router;
