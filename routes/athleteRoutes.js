const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    if (!req.query.uid) {
      throw new Error('athlete not found');
    }

    const uid = req.query.uid;
    console.log(uid);
    const athleteReq = await fetch(
      `http://178.62.94.235/mooch/athlete/?userId=${uid}`
    );
    const athleteData = await athleteReq.json();
    res.json({ data: athleteData });
  } catch (error) {
    console.log(error);
    res.json({ error, message: error.message });
  }
});

module.exports = router;
