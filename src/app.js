const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json())

app.listen(8000, (req,res)=>{
    console.log("server is listening on 8000");
})

