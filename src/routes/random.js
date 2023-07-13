const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const limit = 40;
  const randomNumbers = [];

  for (let i = 0; i < limit; i++) {
    const randomNumber = Math.floor(Math.random() * limit) + 1;
    randomNumbers.push(randomNumber);
  }

  res.json(randomNumbers);
});

module.exports = router;
