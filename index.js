const express = require('express');
const cors = require('cors');
const gzip = require('compression');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const setupServer = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(gzip());
  console.log('Server setup done');
}

const setupRouter = () => {
  console.log('Router setup done');
}

const PORT = process.env.PORT || 1234;

app.get('/healtcheck', (req, res) => {
  res.status(200).json({ message: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  setupServer();
  setupRouter();
});