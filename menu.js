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

const url = 'https://sobi.chonbuk.ac.kr/menu/week_menu.php';
const selector = '.tblType03 tbody td';

function menu(rtm, channel) {
  const d = new Date();
  console.log(d.getDay());

  if (d.getDay() === 6 || d.getDay() === 7) { // 주말이면
    console.log('주말은 쉽니다.');
  } else {
    webScraping(url, selector).then((res) => {
      rtm.sendMessage(res[d.getDay() - 1], channel);
    });
  }
}

module.exports = menu;
