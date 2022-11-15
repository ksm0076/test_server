function randomNum(min, max) {
  const randNum = Math.floor(Math.random() * (max - min + 1)) + 1;
  return randNum;
}

const greeting = function (rtm, channel) {
  console.log('인사를 합시다.');
  const n = randomNum(1, 3);
  console.log(`n값 : ${n}`);
  if (n === 1) {
    rtm.sendMessage('Hello!', channel);
  } else if (n === 2) {
    rtm.sendMessage('Bongjur!', channel);
  } else {
    rtm.sendMessage('Nihao!', channel);
  }
};

module.exports = greeting;
