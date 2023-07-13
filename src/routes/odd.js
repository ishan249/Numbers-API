const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const limit = 40;
  const oddNumbers = [];
  for (let i = 1; i <= limit; i += 2) {
    oddNumbers.push(i);
  }
  res.json(oddNumbers);
});

module.exports = router;
