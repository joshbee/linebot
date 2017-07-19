var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1525693970',
  channelSecret: 'a8214b386a274754f2dbdcd15583ef42',
  channelAccessToken: 'k2YptAecd0p1xHPdtEe1I5USWhBOJYs8rDY0LpHdDROaQDLi4DvPCsUe6rKWIqXceVa7NYuwRneVhtkOmVDTFo+K8FA0sJQ6W0MItOurpVysWZa3QQbqff16BdQ+NSFwBv3JvkL0wLVkoQ4WnDQHMAdB04t89/1O/w1cDnyilFU='
});


bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});