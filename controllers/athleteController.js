const fetch = require('node-fetch');
const axios = require('axios');

exports.athlete = async (req, res) => {
  try {
    if (!req.query.userId) {
      throw new Error('athlete not found');
    }

    const uid = req.query.userId;

    const athleteReq = await fetch(
      `${process.env.PHP_MOOCH_API_URL}/athlete/?userId=${uid}`
    );
    const athleteData = await athleteReq.json();
    res.status(200).json({ ...athleteData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, message: error.message });
  }
};

exports.athleteRegister = async (req, res) => {
  try {
    const payload = { a: 1 };

    let response = await axios({
      method: 'post',
      url: `${
        process.env.PHP_MOOCH_API_URL
      }/test/noderegtest?${new URLSearchParams({
        ...req.body,
      })}`,
      body: payload,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    });

    const data = await response.data;

    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, message: error.message });
  }
};
