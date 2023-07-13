const express = require('express');
const axios = require('axios');

const app = express();

app.get('/numbers', async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ message: 'URL parameter is required' });
    }

    const urls = Array.isArray(url) ? url : [url];

    const requests = urls.map(async (url) => {
      try {
        const response = await axios.get(url);
        return response.data.numbers;
      } catch (error) {
        console.error(`Error fetching numbers from ${url}: ${error.message}`);
        return [];
      }
    });

    const numbers = await Promise.all(requests);
    const combinedNumbers = numbers.flat().filter((value, index, self) => self.indexOf(value) === index);
    const sortedNumbers = combinedNumbers.sort((a, b) => a - b);

    res.json({ numbers: combinedNumbers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(8000, () => {
  console.log('server is listening on port 8000');
});
