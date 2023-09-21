const router = require('express').Router();
const athleteController = require('../controllers/athleteController');

router
  .route('/')
  .get(athleteController.athlete)
  .post(athleteController.athleteRegister);

module.exports = router;
