const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const limit = 40;
  const primeNumbers = [];

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  res.json(primeNumbers);
});

module.exports = router;
