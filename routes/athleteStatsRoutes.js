const router = require('express').Router();
const athleteStatsController = require('../controllers/athleteStatsController');

router.route('/').get(athleteStatsController.stats);

router.route('/set').get(athleteStatsController.statsUpdate);

module.exports = router;
