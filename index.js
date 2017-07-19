var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1525693970',
  channelSecret: 'a8214b386a274754f2dbdcd15583ef42',
  channelAccessToken: 'k2YptAecd0p1xHPdtEe1I5USWhBOJYs8rDY0LpHdDROaQDLi4DvPCsUe6rKWIqXceVa7NYuwRneVhtkOmVDTFo+K8FA0sJQ6W0MItOurpVysWZa3QQbqff16BdQ+NSFwBv3JvkL0wLVkoQ4WnDQHMAdB04t89/1O/w1cDnyilFU='
});



var msgAry = ['哈什麼哈','笑屁喔','不好笑ㄟ~','哈哈哈哈哈哈','怎麼這麼好笑啦','北七ㄟ','太有趣了','喔~'];



bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看

  // if (event.message.type = 'text') {
  //   var msg = event.message.text;
  //   event.reply(msg).then(function(data) {
  //     // success 
  //     console.log(msg);
  //   }).catch(function(error) {
  //     // error 
  //     console.log('error');
  //   });
  // }

  if (event.message.type = 'text') {
    var msg = event.message.text;

		if (msg.indexOf('哈') != -1) {
			var _num = Math.floor((Math.random() * 8));
	    event.reply(msgAry[_num]).then(function(data) {
	      // success 
	      console.log(msg);
	    }).catch(function(error) {
	      // error 
	      console.log('error');
	    });

		}

  }

});




const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});