const { Router } = require('express');
const { getComments } = require('../controllers/comments');

const router = Router();

router.get('/', getComments)

module.exports = router;
