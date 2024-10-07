require('dotenv').config({ path: '../.env' });
const nodemailer = require('nodemailer');
const {google} = require('googleapis');

const pgp = require('pg-promise')(/* options */)
const db = pgp(process.env.PG_STRING);


const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
);

const scopes = ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/mail.google.com/","https://www.googleapis.com/auth/gmail.send"];

module.exports = function(app){

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
        console.log(tokens);
        oauth2Client.setCredentials(tokens); //oauth2Client is the thing

        const transport = nodemailer.createTransport({
            service:'gmail',
            auth:{
                type:'OAuth2',
                user:"dej.jonas12@gmail.com",
                clientId:process.env.CLIENT_ID,
                clientSecret:process.env.CLIENT_SECRET,
                refreshToken:tokens.refresh_token,
                accessToken:tokens.access_token
            },
            tls: {
                rejectUnauthorized: false
              }
              
        });
        const mailOptions = {
            from:"dej.jonas12@gmail.com",
            to:"dej.jonas12@gmail.com",
            subject:"Hello from gmail",
            text:"Hello from gmail"
        };
        transport.sendMail(mailOptions, (error,info)=>{
            if(error){
                console.log(error);
            }
            console.log(info);
        });
        transport.close();

        res.redirect('http://localhost:3000/base');
    });
}