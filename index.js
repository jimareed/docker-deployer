var express = require('express');
var bodyParser = require("body-parser");
var app = express();

var shell = require('shelljs');

var DEFAULT_PORT = 9080;
var PORT = process.env.PORT || DEFAULT_PORT;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/deploy',function(req,res){
//  var request = JSON.parse(req);
  console.log('deploy..');
  console.log(req.body);
//  console.log(request.repository.owner);
//  console.log(request.repository.name);
  if (shell.exec('./deploy.sh jimareed helloworld').code != 0) {
    console.log('error deploying image');
  }
  res.end("ok");
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
