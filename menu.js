const axios = require('axios');
const cheerio = require('cheerio');

async function webScraping(url, selector) {
  const res = [];
  const html = await axios.get(url);
  const $ = cheerio.load(html.data);

  // eslint-disable-next-line no-restricted-syntax
  for (const v of $(selector)) {
    res.push($(v).text());
  }

  return res;
}

const d = new Date();
console.log(d.getDay());

const url = 'https://sobi.chonbuk.ac.kr/menu/week_menu.php';
const selector = `#contents > div.contentsArea.WeekMenu > div:nth-child(227) > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(${d.getDay() + 2}) > ul > li`;
console.log(selector);

function menu(rtm, channel) {
  if (d.getDay() === 6 || d.getDay() === 7) { // 주말이면
    rtm.sendMessage('주말은 쉽니다.', channel);
    console.log('주말은 쉽니다.');
  } else {
    webScraping(url, selector).then((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i] !== '') {
          rtm.sendMessage(res[i], channel);
        }
      }
    });
  }
}

module.exports = menu;
