const express = require('express');
const dateRoutes = require('./date.route');
const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/date', dateRoutes);

module.exports = router;
