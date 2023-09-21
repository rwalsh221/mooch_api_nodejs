const fetch = require('node-fetch');

exports.athlete = async (req, res) => {
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
};

exports.athleteRegister = async (req, res) => {
  try {
    await fetch(`http://178.62.94.235/mooch/athlete/?userId=${uid}`, {
      method: 'POST',
      body: req.body,
    });

    res.status(200).send('registration successfull');
  } catch (error) {
    console.log(error);
    res.json({ error, message: error.message });
  }
};
