const express = require('express');
const cors = require('cors');
const gzip = require('compression');
const dotenv = require('dotenv');

const app = express();

const setupServer = () => {
  dotenv.config();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(gzip());
  console.log('Server setup done');
}

const setupRouter = () => {
  console.log('Router setup done');
}

const PORT = 5500;

app.get('/healtcheck', (req, res) => {
  res.status(200).json({ message: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  setupServer();
  setupRouter();
});