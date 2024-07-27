require('dotenv').config({ path: '../.env' });
const {google} = require('googleapis');
const pgp = require('pg-promise')(/* options */)
const express = require("express");

const app = express();
const db = pgp(process.env.PG_STRING);


const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
);

const scopes = ["https://www.googleapis.com/auth/userinfo.profile"];

app.get('/users', async (req, res) => {
    try {
      const users = await db.any('SELECT * FROM users');
      res.json(users);
    } catch (err) {
      console.error('ERROR:', err);
      res.status(500).send('Server error');
    }
});

app.get('/api/auth-url',(req,res)=>{
    const url = oauth2Client.generateAuthUrl({
        access_type:'offline',
        scope:scopes
    });
    res.send(url)
})

app.get('/api/google-callback',async (req,res)=>{
    const {code} = req.query;
    const {tokens} = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens); //oauth2Client is the thing
    res.redirect('http://localhost:3000/base');
});

app.get("/api", (req, res) => {
    res.send("Hello World! \n");   
});

app.listen(process.env.PORT, () => console.log(`App available on http://localhost:${process.env.PORT}`));



