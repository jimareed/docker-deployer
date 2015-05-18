var express = require('express');
var shell = require('shelljs');
var Log = require('log');
var fs = require('fs');

var stream = fs.createReadStream(__dirname + '/deployer.log');
var log = Log('info', stream);

var DEFAULT_PORT = 9080;
var PORT = process.env.PORT || DEFAULT_PORT;
var app = express();

app.post('/deploy',function(req,res){
  log.info('deploy');
  if (shell.exec('./deploy.sh').code != 0) {
    log.error('error deploying image');
  }
  res.end("ok");
});

app.listen(PORT)
log.info('Running on http://localhost:' + PORT);
