var express = require('express');
var bodyParser = require("body-parser");
var app = express();

var shell = require('shelljs');

var DEFAULT_PORT = 9080;
var PORT = process.env.PORT || DEFAULT_PORT;

app.use(bodyParser.json());

app.post('/deploy',function(req,res){
  if (shell.exec('./deploy.sh ' + 
                 req.body.repository.owner + ' ' + 
                 req.body.repository.name).code != 0) {
    console.log('error deploying image');
  }
  res.end("ok");
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
