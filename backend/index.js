require('dotenv').config({ path: '../.env' });

const express = require("express");

const app = express();

require('./db_api')(app);
require('./oauth')(app);

app.get("/api", (req, res) => {
    res.send("Hello World! \n");   
});

app.listen(process.env.PORT, () => console.log(`App available on http://localhost:${process.env.PORT}`));



