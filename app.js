const express = require('express');
const app = express();
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/ajax-request', (req, res) => {
  web3.eth.getAccounts(function(errror, addresses) {
    if(error === null) res.send(JSON.stringify(addresses));
  });
});

app.listen(3000);
