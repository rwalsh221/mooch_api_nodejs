const router = require('express').Router();
const segmentController = require('../controllers/segmentController');

router.route('/').get(segmentController.segments);

router.route('/set').get(segmentController.segmentsUpdate);

module.exports = router;
