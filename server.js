var http = require('http'),
    fs = require('fs');

process.on('uncaughtException', function(err)
  {
    console.log(err);
  });

var indexPage =
  fs.readFileSync(__dirname + '/index.html');

var server = http.createServer(onReqRes);
function onReqRes(req,res){
  res.end(indexPage.toString());

}
server.listen(9080);
