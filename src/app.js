const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json())

const oddNumber = require("./routes/odd");
const fiboNumber = require("./routes/fibonacci");
const randNumber = require("./routes/random");
const primeNumber = require("./routes/prime");

app.use('/odd', oddNumber);
app.use('/fibo', fiboNumber);
app.use('/rand', randNumber);
app.use('/primes', primeNumber);

app.listen(8000, (req,res)=>{
    console.log("server is listening on 8000");
})

