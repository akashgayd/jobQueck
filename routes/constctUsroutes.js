const express = require('express');
const { PostContactus } = require('../controllers/conatctUsController');

const router = express.Router();

router.post('/', PostContactus);

module.exports = router;