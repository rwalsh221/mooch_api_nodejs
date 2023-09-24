if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const dashboardRoutes = require('./routes/dashboardRoutes');
const athleteRoutes = require('./routes/athleteRoutes');
const athleteStatsRoutes = require('./routes/athleteStatsRoutes');
const segmentRoutes = require('./routes/segmentRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('hello'));

app.use('/dashboard', dashboardRoutes);
app.use('/api/athlete', athleteRoutes);
app.use('/api/athlete/stats', athleteStatsRoutes);
app.use('/api/segments', segmentRoutes);

app.listen(port, () => {
  console.log(`server running onn port ${port}`);
});
