require('dotenv').config({ path: '../.env' });
const express = require("express");
const {google} = require('googleapis');

const pgp = require('pg-promise')()
const db = pgp(process.env.PG_STRING);



module.exports = function(app){
    app.get('api/users', async (req, res) => {
        try {
          const users = await db.any('SELECT * FROM users');
          res.json(users);
        } catch (err) {
          console.error('ERROR:', err);
          res.status(500).send('Server error');
        }
    });


    //other routes..
}