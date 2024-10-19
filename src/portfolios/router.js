const express = require('express');
const portfolios = require('../../portfolio-mock');

const router = express.Router();

// Get all portfolios
router.get('/', (req, res) => {
  console.log('Starting get all portfolios endpoint');
  if (portfolios.length === 0) {
    // No portfolios, return a 404 not found status code
    return res.status(204).json({ message: 'No portfolios found' });
  }
  return res.status(200).json(portfolios);
});

// Get one portfolio
// :id indicates a path parameter, you can use it as req.params
router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Starting get on portfolio endpoint for id: ${id}`);
  const portfolio = portfolios.find((portfolio) => portfolio.id === Number(id));
  if (!portfolio) {
    return res.status(404).json({ message: `Not found portfolio with id: ${id}`});
  }
  return res.status(200).json(portfolio);
});

// Create new portfolio
router.post('/', (req, res) => {
  const data = req.body;

  // TODO: Implement validator package, like Joi
  if (!data.user || !data.name || !data.url) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  data.id = portfolios[portfolios.length - 1].id + 1;
  data.status = 'draft';
  data.active = true;
  data.noVisits = 0;

  data.createdAt = new Date();
  data.updatedAt = new Date();

  portfolios.push(data);

  return res.status(201).json(data);
});

module.exports = router;