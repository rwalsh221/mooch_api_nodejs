exports.stats = async (req, res) => {
  try {
    if (!req.query.uid) {
      throw new Error('athlete not found');
    }

    const uid = req.query.uid;

    const athleteStatsReq = await fetch(
      `http://178.62.94.235/mooch/athlete/stats?userId=${uid}`
    );
    const athleteStatsData = await athleteStatsReq.json();
    res.json({ data: athleteStatsData });
  } catch (error) {
    console.log(error);
    res.json({ error, message: error.message });
  }
};

exports.statsUpdate = async (req, res) => {
  try {
    if (!req.query.uid) {
      throw new Error('athlete not found');
    }

    const uid = req.query.uid;

    await fetch(`http://178.62.94.235/mooch/athlete/stats/set?userId=${uid}`);

    res.status(200).send('update successfull');
  } catch (error) {
    console.log(error);
    res.json({ error, message: error.message });
  }
};
