const router = require('express').Router();
const { request, response } = require('express');
// const fetch = require('node-fetch');
const athleteController = require('../controllers/athleteController');

router
  .route('/')
  .get(athleteController.athlete)
  .post(athleteController.athleteRegister);
// router.get('/', (request, response) => {
//   console.log('hello');
//   response.json({
//     message: 'hello',
//   });
// });

module.exports = router;
