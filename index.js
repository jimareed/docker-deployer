require('shelljs/global');

var express = require('express');
var DEFAULT_PORT = 9080;
var PORT = process.env.PORT || DEFAULT_PORT;
var app = express();

if (exec('docker ps | grep helloworld >t.out') !== 0) {
	console.log('exec failed');
} else {
	console.log('exec success');
}

app.get('/', function (req, res) {
  res.send('Hello World\n');
});
app.post('/deploy',function(req,res){
  console.log("Deploy");
  res.end("yes");
});
app.listen(PORT)
console.log('Running on http://localhost:' + PORT);