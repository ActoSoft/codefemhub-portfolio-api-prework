const express = require('express');
const porfolios = require('../../portfolio-mock');

const router = express.Router();

// Get all portfolios
router.get('/', (req, res) => {
  console.log('Starting get all portfolios endpoint');
  if (porfolios.length === 0) {
    // No portfolios, return a 404 not found status code
    return res.status(404).json({ message: 'No portfolios found' });
  }
  return res.status(200).json(porfolios);
});

module.exports = router;