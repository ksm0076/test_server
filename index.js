// require('dotenv').config();

const {RTMClient} = require('@slack/rtm-api');

const fs = require('fs');

var token;

try{
	token = fs.readFileSync('./token').toString('utf-8');
} catch (err){
	console.error(err);
}

console.log(token);

token = token.replace(/\n/g, "");

const rtm = new RTMClient(token);
rtm.start();

var greeting = require('./greeting');
var square = require('./square');

rtm.on('message', function (message){
	var channel = message.channel;
	var text = message.text;

	if(!isNaN(text)){
		square(rtm, text, channel);
	} else{
		switch(text){
			case 'hi':
				greeting(rtm,channel);
				break;
			default:
				rtm.sendMessage('I am alive~',channel);
		}
	}
});
