const { Router } = require('express');
const { getPortfolioData } = require('../controllers/portfolio');

const router = Router();

router.get('/', getPortfolioData);

module.exports = router;
