function sq(n) {
  return n * n;
}

function square(rtm, text, channel) {
  console.log('제곱을 실시합니다.');
  console.log(text);
  rtm.sendMessage(`The result is ${sq(text)}`, channel);
}

module.exports = {
  square,
  sq,
};
