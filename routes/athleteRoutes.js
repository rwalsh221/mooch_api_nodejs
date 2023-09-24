const router = require('express').Router();
const bodyParser = require('body-parser');
const athleteController = require('../controllers/athleteController');

router.use(bodyParser.json());

router
  .route('/')
  .get(athleteController.athlete)
  .post(athleteController.athleteRegister);
// .get(athleteController.athlete)
// .post(athleteController.athleteRegister);

// router.post('/test', athleteController.test);

module.exports = router;
