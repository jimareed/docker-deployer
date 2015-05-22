var express = require('express');
var bodyParser = require("body-parser");
var app = express();

var shell = require('shelljs');

var DEFAULT_PORT = 9080;
var PORT = process.env.PORT || DEFAULT_PORT;

app.use(bodyParser.json());

app.post('/deploy/:hostport/:containerport',function(req,res){
  console.log('deploying ' + req.body.repository.owner + '/' + 
              req.body.repository.name + ' at ' + Date().toString());
  if (shell.exec('./deploy.sh ' + 
                 req.body.repository.owner + ' ' + 
                 req.body.repository.name + ' ' +
                 req.params.hostport + ' ' + 
                 req.params.containerport).code != 0) {
    console.log('error deploying ' + req.body.repository.name);
  }
  res.end("ok");
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
