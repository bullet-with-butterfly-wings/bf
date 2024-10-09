require('dotenv').config({ path: '../.env' });
const nodemailer = require('nodemailer');
const {google} = require('googleapis');

const pgp = require('pg-promise')(/* options */)
const db = pgp(process.env.PG_STRING);

const oauth2Client = new google.auth.OAuth2(
    process.env.OAUTH_ID,
    process.env.OAUTH_SECRET,
    process.env.REDIRECT_URL
);

const scopes = ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/gmail.send"];

module.exports = function(app){

    app.get('/api/auth-url',(req,res)=>{
        const url = oauth2Client.generateAuthUrl({
            access_type:'offline',
            scope:scopes,
            prompt: 'consent'
        });
        res.send(url)
    })

    app.get('/api/google-callback',async (req,res)=>{
        const {code} = req.query;
        const {tokens} = await oauth2Client.getToken(code);
        console.log(tokens.refresh_token);
        oauth2Client.setCredentials(tokens); //oauth2Client is the thing
        //store the refresh_token
        if (true){
            res.redirect('http://localhost:3000/intro')
        }else{
            res.redirect('http://localhost:3000/base');
        }
    });
}