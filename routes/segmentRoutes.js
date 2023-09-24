const router = require('express').Router();
const segmentController = require('../controllers/segmentController');

router
  .route('/')
  .get(segmentController.segments)
  .patch(segmentController.segmentsUpdate);

module.exports = router;
