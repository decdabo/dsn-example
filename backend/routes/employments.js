const { Router } = require('express');
const { getEmployments } = require('../controllers/employments');

const router = Router();

router.get('/', getEmployments);

module.exports = router;
