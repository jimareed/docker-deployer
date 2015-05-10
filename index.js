var express = require('express');
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World\n');
});
app.post('/deploy',function(req,res){
  console.log("Deploy");
  res.end("yes");
});
app.listen(PORT)
console.log('Running on http://localhost:' + PORT);