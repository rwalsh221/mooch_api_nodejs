const router = require('express').Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/', (request, response) => {
  console.log(dashboardController.test);
  response.json({
    message: request.query.message,
  });
});

router.route('/test').get(dashboardController.test);

module.exports = router;
