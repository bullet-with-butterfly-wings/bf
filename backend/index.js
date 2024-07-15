require('dotenv').config();
const express = require("express");

const app = express();


app.get("/api", (req, res) => {
    res.json({message: "Hello World"});   
});

app.listen(3001, () => console.log(`App available on http://localhost:3001`));



