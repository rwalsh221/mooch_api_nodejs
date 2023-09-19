if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');

const app = express();

const dashboardRoutes = require('./routes/dashboardRoutes');
const athleteRoutes = require('./routes/athleteRoutes');
const athleteStatsRoutes = require('./routes/athleteStatsRoutes');
const segmentRoutes = require('./routes/segmentRoutes');

let port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// create a server

app.get('/', (req, res) => res.send('hello'));

app.listen(port, () => {
  console.log(`server running onn port ${port}`);
});

app.use('/dashboard', dashboardRoutes);
app.use('/api/athlete', athleteRoutes);
app.use('/api/athletestats', athleteStatsRoutes);
app.use('/api/segment', segmentRoutes);
