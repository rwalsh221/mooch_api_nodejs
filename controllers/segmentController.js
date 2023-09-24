const fetch = require('node-fetch');

exports.segments = async (req, res) => {
  try {
    if (!req.query.uid) {
      throw new Error('athlete not found');
    }

    const uid = req.query.uid;

    const athleteReq = await fetch(
      `${process.env.REACT_APP_MOOCH_API_URL}/segments/?userId=${uid}`
    );
    const athleteData = await athleteReq.json();
    res.json({ data: athleteData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, message: error.message });
  }
};

exports.segmentsUpdate = async (req, res) => {
  try {
    if (!req.query.uid) {
      throw new Error('athlete not found');
    }

    const uid = req.query.uid;

    await fetch(
      `${process.env.REACT_APP_MOOCH_API_URL}/segments/set?userId=${uid}`
    );

    res.status(200).send('update successfull');
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, message: error.message });
  }
};
