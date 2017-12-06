import express from 'express';
import path from 'path';
import Web3 from 'web3';
import bodyParser from 'body-parser';
import config from './config.js';
import secret from './secret.js'
import fs from 'fs';


const app = express();
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//mount the 2 folders to static
app.use('/static', express.static('static'));
app.use('/static', express.static('dist'));

app.post('/submit',function(req, res) {
  if (!req.body['g-recaptcha-response']) {
    return res.json({
      "responseCode" : 1,
      "responseDesc" : "Please select captcha",
    });
  }
  let secretKey = config.recaptcha;
  // req.connection.remoteAddress will provide IP address of connected user.
  let verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body['g-recaptcha-response']}&remoteip=${req.connection.remoteAddress}`;
  // Hitting GET request to the URL, Google will respond with success or error scenario.
  request(verificationUrl,function(error,response,body) {
    body = JSON.parse(body);
    // Success will be true or false depending upon captcha validation.
    if(body.success !== undefined && !body.success) {
      return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
    }
    res.json({"responseCode" : 0,"responseDesc" : "Sucess"});
  });
});

//because who wants to have to decode JSON
app.use(bodyParser.json());

//handle '/' route
app.get('*', (req, res) => res.sendFile(path.resolve(`index.html`)));

//start up the actual app
app.listen(config.port,() => console.log(`App listening on Port:${config.port}`));
