const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const limit = 40;
  const fibonacciNumbers = [0, 1];

  let a = 0;
  let b = 1;
  while (b <= limit) {
    const nextNumber = a + b;
    fibonacciNumbers.push(nextNumber);
    a = b;
    b = nextNumber;
  }

  res.json(fibonacciNumbers);
});

module.exports = router;
