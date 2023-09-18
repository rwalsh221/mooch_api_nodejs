const express = require('express');

const app = express();

const dashboardRoutes = require('./routes/dashboardRoutes');

let port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// create a server

app.get('/', (req, res) => res.send('hello'));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

app.use('/dashboard', dashboardRoutes);
