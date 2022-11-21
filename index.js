// require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');

let token;

try {
  token = fs.readFileSync('./token').toString('utf-8');
} catch (err) {
  console.error(err);
}

// console.log(token);

token = token.replace(/\n/g, '');

const rtm = new RTMClient(token);
rtm.start();

const greeting = require('./greeting').default;
const square = require('./square');
const menu = require('./menu');

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (!isNaN(text)) {
    square.square(rtm, text, channel);
  } else {
    switch (text) {
      case 'hi':
        rtm.sendMessage(greeting(), channel);
        break;
      case 'bye':
        rtm.sendMessage('bye~ bye~', channel);
        console.log('서버 종료');
        process.exit(1);
        break;
      case '밥':
        menu(rtm, channel);
        break;
      default:
        rtm.sendMessage('I am alive~', channel);
        break;
    }
  }
});
