const router = require('express').Router();

router.get('/', (request, response) => {
  response.json({
    message: 'hello',
  });
});

module.exports = router;
