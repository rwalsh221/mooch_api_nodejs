const fetch = require('node-fetch');

exports.segments = async (req, res) => {
  console.log('hellow segments');
  try {
    if (!req.query.userId) {
      throw new Error('athlete not found');
    }

    const uid = req.query.userId;

    const segmentsReq = await fetch(
      `${process.env.PHP_MOOCH_API_URL}/segments?userId=${uid}`
    );
    const segmentsData = await segmentsReq.json();
    console.log(segmentsData);
    res.status(200).json([...segmentsData]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, message: error.message });
  }
};

exports.segmentsUpdate = async (req, res) => {
  try {
    if (!req.query.userId) {
      throw new Error('athlete not found');
    }

    const uid = req.query.userId;

    await fetch(`${process.env.PHP_MOOCH_API_URL}/segments/set?userId=${uid}`);

    res.status(200).send('update successfull');
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, message: error.message });
  }
};
