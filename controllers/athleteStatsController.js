const fetch = require('node-fetch');

exports.stats = async (req, res) => {
  try {
    if (!req.query.userId) {
      throw new Error('athlete not found');
    }

    const uid = req.query.userId;

    const athleteStatsReq = await fetch(
      `${process.env.PHP_MOOCH_API_URL}/athlete/stats?userId=${uid}`
    );
    const athleteStatsData = await athleteStatsReq.json();
    res.status(200).json({ ...athleteStatsData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, message: error.message });
  }
};

exports.statsUpdate = async (req, res) => {
  try {
    if (!req.query.userId) {
      throw new Error('athlete not found');
    }

    const uid = req.query.userId;

    await fetch(
      `${process.env.PHP_MOOCH_API_URL}/athlete/stats/set?userId=${uid}`
    );

    res.status(200).send('update successfull');
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, message: error.message });
  }
};
