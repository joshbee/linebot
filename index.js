var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1525693970',
  channelSecret: 'a8214b386a274754f2dbdcd15583ef42',
  channelAccessToken: 'k2YptAecd0p1xHPdtEe1I5USWhBOJYs8rDY0LpHdDROaQDLi4DvPCsUe6rKWIqXceVa7NYuwRneVhtkOmVDTFo+K8FA0sJQ6W0MItOurpVysWZa3QQbqff16BdQ+NSFwBv3JvkL0wLVkoQ4WnDQHMAdB04t89/1O/w1cDnyilFU='
});



var msgAry1 = ['哈什麼哈','笑屁喔','不好笑ㄟ~','哈哈哈哈哈哈哈哈','怎麼這麼好笑啦','北七ㄟ','太有趣了','喔~','圖','哈'];
var msgAry2 = ['有事嗎?','找我幹嘛?','有什麼可以為你服務的嗎?','什麼事啦~ 煩~','圖','叫屁喔~','你沒朋友喔~ 一直找我聊天','你常常覺得孤單寂寞覺得冷嗎?'];
var msgAry3 = ['我怎麼會知道啦~','自己上網查啊','什麼啦~','我不會告訴你的','別問~你會怕'];
var msgAry4 = ['嗯嗯','我也覺得','對個屁！','OK'];
var msgAry5 = ['你知道城市跟鄉下哪個地方的河流比較湍急嗎?','小杯milk茶想變big杯要怎麼做?','鉛筆姓什麼?','你才是','你有事嗎你'];
var msgAry6 = ['不然勒~','加油好嗎~','我是BeeBee','可以'];
var msgAry7 = ['他是誰?','他?','他怎麼了?'];
var msgAry8 = ['中午要吃Dr. Wu嗎?','這是雷神索爾的斧頭'];
var msgAry9 = ['我不知道ㄟ','你說什麼我聽不懂~','什麼東西','隨便','大概吧','有可能喔','你說呢?'];
var msgAry10 = ['想吃什麼就吃什麼啊','吃吃的愛','吃屎','吃便當好了','不要吃減肥'];

var msgAry11 = ['大帥哥','大美女','便秘王','台北林志玲','信義金城武','走音天后','洗洗睡王','笨蛋','切版高手'];

var stickPack = ['1','2'];
var stickID = [['3','5','16','21','135','139','405','428'],['18','24','149','170','177','179','502','520']];




bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看

  if (event.message.type == 'text') {
    var msg = event.message.text;

		if (msg.indexOf('哈') != -1 || msg.indexOf('呵') != -1 || msg.indexOf('笑') != -1) {
			var num = msgAry1.length;
			var ram = Math.floor((Math.random() * num));
			if(ram == 8){
				event.reply({
					type: 'image',
					originalContentUrl: 'https://www.ashlieworks.com/test/josh/linebot/58a413f547357_375_0.jpg',
					previewImageUrl: 'https://www.ashlieworks.com/test/josh/linebot/58a413f547357_375_0.jpg'
				});
			}else{
				event.reply({ type: 'text', text: msgAry1[ram] });
			}
				
		}else if (msg == '輕輕的我將離開你') {

			event.reply([
				{ type: 'text', text: '請將眼角的淚拭去~' },
				{
					type: 'sticker',
					packageId: '1',
					stickerId: '408'
				}]).then(function(data) {
						// success 
						console.log(msg);
						setTimeout(function(){bot.leaveGroup(event.source.groupId);}, 1500)
						
					});
			
		}else if (msg.indexOf('XD') != -1 || msg.indexOf('拜拜') != -1 || msg.indexOf('bye') != -1 || msg.indexOf('再見') != -1) {
				event.reply({ type: 'text', text: msg });
				
		}else if (msg == '早安' || msg == '早') {
			event.reply([{ type: 'text', text: '早啊！' },{
					type: 'image',
					originalContentUrl: 'https://www.ashlieworks.com/test/josh/linebot/14440999_301754200179927_9162454555288991313_n.jpg',
					previewImageUrl: 'https://www.ashlieworks.com/test/josh/linebot/14440999_301754200179927_9162454555288991313_n.jpg'
				}]);

		}else if (msg == '晚安') {
			event.reply({ type: 'text', text: '晚安~快去睡！' });

		}else if (msg.indexOf('怒') != -1 || msg.indexOf('生氣') != -1 || msg.indexOf('火大') != -1 || msg.indexOf('可惡') != -1 || msg.indexOf('吵架') != -1) {
			var ram = Math.floor((Math.random() * 2));
			if(ram == 0){
				event.reply({
					type: 'image',
					originalContentUrl: 'https://www.ashlieworks.com/test/josh/linebot/file_56a4b043e7bc8.jpg',
					previewImageUrl: 'https://www.ashlieworks.com/test/josh/linebot/file_56a4b043e7bc8.jpg'
				});
			}else{
				event.reply({ type: 'text', text: '你再這樣我要森77囉~' });
			}
			

		}else if (msg.indexOf('吵') != -1 || msg.indexOf('閉嘴') != -1) {
			event.reply({
				type: 'image',
				originalContentUrl: 'https://www.ashlieworks.com/test/josh/linebot/15a500031adfe76853d9.jpg',
				previewImageUrl: 'https://www.ashlieworks.com/test/josh/linebot/15a500031adfe76853d9.jpg'
			});
			
		}else if (msg.indexOf('棒') != -1 || msg.indexOf('讚') != -1 || msg.indexOf('真的') != -1) {
			event.reply({
				type: 'image',
				originalContentUrl: 'https://www.ashlieworks.com/test/josh/linebot/15a500031ad204692d1c.jpg',
				previewImageUrl: 'https://www.ashlieworks.com/test/josh/linebot/15a500031ad204692d1c.jpg'
			});
				
		}else if (msg.indexOf('笨蛋') != -1 || msg.indexOf('白痴') != -1 || msg.indexOf('智障') != -1) {
			event.reply({
				type: 'image',
				originalContentUrl: 'https://www.ashlieworks.com/test/josh/linebot/d868f28ea71ec94eb9e10f2c7d173765.jpg',
				previewImageUrl: 'https://www.ashlieworks.com/test/josh/linebot/d868f28ea71ec94eb9e10f2c7d173765.jpg'
			});
				
		}else if (msg == '幹' || msg.indexOf('媽的') != -1 || msg.indexOf('死') != -1) {
			event.reply({
				type: 'image',
				originalContentUrl: 'https://www.ashlieworks.com/test/josh/linebot/163500026d5d353c21a6.jpg',
				previewImageUrl: 'https://www.ashlieworks.com/test/josh/linebot/163500026d5d353c21a6.jpg'
			});

		}else if (msg.indexOf('Bee') != -1 || msg.indexOf('bee') != -1 || msg.indexOf('機器人') != -1 || msg.indexOf('hi') != -1 || msg.indexOf('嗨') != -1 || msg.indexOf('hello') != -1 || msg.indexOf('Hello') != -1 || msg.indexOf('喂') != -1 || msg.indexOf('安安') != -1) {
			var num = msgAry2.length;
			var ram = Math.floor((Math.random() * num));
			if(ram == 4){
				event.reply({
					type: 'image',
					originalContentUrl: 'https://www.ashlieworks.com/test/josh/linebot/159d0002fd20e3da8b30.jpg',
					previewImageUrl: 'https://www.ashlieworks.com/test/josh/linebot/159d0002fd20e3da8b30.jpg'
				});
			}else{
				event.reply({ type: 'text', text: msgAry2[ram] });
			}

		}else if (msg.indexOf('時間') != -1 || msg.indexOf('幾點') != -1) {
			var now = new Date();
			var hours = now.getHours() + 8;
			if(hours >= 24){
				hours = hours - 24;
			}
			var minutes = now.getMinutes();
			event.reply({ type: 'text', text: '現在是 '+hours+':'+minutes});

		}else if (msg.indexOf('吃屎') != -1) {
			event.reply({ type: 'text', text: '你自己慢慢吃~' });

		}else if (msg.indexOf('吃') != -1) {
			var num = msgAry10.length;
			var ram = Math.floor((Math.random() * num));
			event.reply({ type: 'text', text: msgAry10[ram] });

		}else if (msg.indexOf('什麼') != -1 || msg.indexOf('多少') != -1 || msg.indexOf('如何') != -1 || msg.indexOf('幾') != -1) {
			var num = msgAry3.length;
			var ram = Math.floor((Math.random() * num));
			event.reply({ type: 'text', text: msgAry3[ram] });

		}else if (msg.indexOf('想睡') != -1) {
			event.reply({ type: 'text', text: '我也好想睡' });

		}else if (msg.indexOf('餓') != -1) {
			event.reply({ type: 'text', text: '我也覺得餓~ XD' });

		}else if (msg.indexOf('煩') != -1) {
			event.reply({
				type: 'image',
				originalContentUrl: 'https://www.ashlieworks.com/test/josh/linebot/163300041050371df2ac.jpg',
				previewImageUrl: 'https://www.ashlieworks.com/test/josh/linebot/163300041050371df2ac.jpg'
			});

		}else if (msg.indexOf('可愛') != -1) {
			event.reply({ type: 'text', text: '嗯~ 還不錯' });

		}else if (msg.indexOf('對') != -1) {
			var num = msgAry4.length;
			var ram = Math.floor((Math.random() * num));
			event.reply({ type: 'text', text: msgAry4[ram] });

		}else if (msg.indexOf('今天') != -1) {
			event.reply({ type: 'text', text: '你說什麼我聽不懂~' });

		}else if (msg.indexOf('宅') != -1) {
			event.reply([{ type: 'text', text: 'https://news.gamme.com.tw/' },{ type: 'text', text: '衝一下pv嘛~' }]);

		}else if (msg.indexOf('滾') != -1) {
			event.reply({ type: 'text', text: '偏不要 ㄌㄩㄝ..ㄌㄩㄝ..ㄌㄩㄝ' });

		}else if (msg.indexOf('我是誰') != -1) {
			var num = msgAry11.length;
			var ram = Math.floor((Math.random() * num));

			bot.getUserProfile(event.source.userId).then(function (profile) {
				if(profile.displayName == undefined){
					event.reply('你是' +msgAry11[ram]);
				}else{
					event.reply('你是' +profile.displayName+' 是'+msgAry11[ram]);
				}
				
				console.log(profile);
			}).catch(function (error) {
				// error 
			});

		}else if (msg.indexOf('有事') != -1) {
			event.reply({ type: 'text', text: '哩來~有什麼事 好好講' });

		}else if (msg.indexOf('嗎') != -1 || msg.indexOf('誰') != -1) {
			var num = msgAry9.length;
			var ram = Math.floor((Math.random() * num));
			event.reply({ type: 'text', text: msgAry9[ram] });

		}else if (msg.indexOf('你') != -1) {
			var num = msgAry5.length;
			var ram = Math.floor((Math.random() * num));
			event.reply({ type: 'text', text: msgAry5[ram] });

		}else if (msg.indexOf('我') != -1) {
			var num = msgAry6.length;
			var ram = Math.floor((Math.random() * num));
			event.reply({ type: 'text', text: msgAry6[ram] });

		}else if (msg.indexOf('他') != -1 || msg.indexOf('她') != -1) {
			var num = msgAry7.length;
			var ram = Math.floor((Math.random() * num));
			event.reply({ type: 'text', text: msgAry7[ram] });

		}else if (msg.indexOf('沛倪') != -1 || msg.indexOf('小美') != -1 || msg.indexOf('阿美') != -1) {
			var num = msgAry8.length;
			var ram = Math.floor((Math.random() * num));
			event.reply({ type: 'text', text: msgAry8[ram] });

		}




  }else if (event.message.type == 'sticker') {
  	var num = stickPack.length;
  	var ram = Math.floor((Math.random() * num));
  	var ram2 = Math.floor((Math.random() * 8));

		event.reply({
			type: 'sticker',
			packageId: stickPack[ram],
			stickerId: stickID[ram][ram2]
		});

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