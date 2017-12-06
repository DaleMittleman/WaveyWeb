import express from 'express';
import path from 'path';
import Web3 from 'web3';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import fs from 'fs';
import config from './config.js';
import secret from './secret.js'

const app = express();
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const newKey = () => {
  return "NEW";
}
//mount the 2 folders to static
app.use('/static', express.static('static'));
app.use('/static', express.static('dist'));

app.post('/submit',function(req, res) {
  if (!req.body['g-recaptcha-response'])
    return res.status(400);

  let secretKey = config.recaptcha;
  let verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body['g-recaptcha-response']}&remoteip=${req.connection.remoteAddress}`;
  request(verificationUrl, (err, response, body) => {
    body = JSON.parse(body);
    if (!body.success) {
      return res.status(400);
    }
    res.status(200);
  });

  fetch(verificationUrl)
  .then(function(resp) {
      let body = res.body.json()
      body.then(success => {

        //if properly filled out & successful
        if (success) {
          return res.json({
            key: newKey(),
          })
        } else {
          return res.status(400);
        }
      }, err => {

        //failed parsing
        return res.status(400);
      })
  });
});

//because who wants to have to decode JSON
app.use(bodyParser.json());

//handle '/' route
app.get('*', (req, res) => res.sendFile(path.resolve(`index.html`)));

//start up the actual app
app.listen(config.port,() => console.log(`App listening on Port:${config.port}`));
