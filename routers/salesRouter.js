const express = require('express');
const salesController = require('../controllers/salesController');

const router = express.Router({ mergeParams: true });

router.post('/', salesController.create);

module.exports = router;