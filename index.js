var express = require('express');
var bodyParser = require("body-parser");
var app = express();

var shell = require('shelljs');

var DEFAULT_PORT = 9080;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/deploy',function(req,res){
  if (shell.exec('./deploy.sh jimareed helloworld').code != 0) {
    console.log('error deploying image');
  }
  res.end("ok");
  console.log('body:' + req.body);
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
