function randomNum(min, max) {
  const randNum = Math.floor(Math.random() * (max - min + 1));
  return randNum;
}

const reply = ['Hello!', 'Bongjur!', 'Nihao!'];

function greeting() {
  console.log('인사를 합시다.');
  const n = randomNum(0, 2);
  // rtm.sendMessage(reply[n], channel);

  return reply[n];
}

module.exports = greeting;
