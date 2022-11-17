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

const greeting = require('./greeting');
const square = require('./square');

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  if (!isNaN(text)) {
    square(rtm, text, channel);
  } else {
    switch (text) {
      case 'hi':
        greeting(rtm, channel);
        break;
      case 'bye':
        rtm.sendMessage('bye~ bye~', channel);
        console.log('서버 종료');
        process.exit(1);
        break;
      default:
        rtm.sendMessage('I am alive~', channel);
        break;
    }
  }
});
