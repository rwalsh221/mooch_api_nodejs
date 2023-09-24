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
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });
// router.use(bodyParser.json());
// create a server

app.get('/', (req, res) => res.send('hello'));

app.use('/dashboard', dashboardRoutes);
app.use('/api/athlete', athleteRoutes);
app.use('/api/athletestats', athleteStatsRoutes);
app.use('/api/segment', segmentRoutes);

app.listen(port, () => {
  console.log(`server running onn port ${port}`);
});
