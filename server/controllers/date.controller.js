const http = require('http');

module.exports = {
  getNumbersInfo
}

async function getNumbersInfo(number) {
  console.log('===> API',number);
  console.log(`http://numbersapi.com/${number}/date`);
  return http.get(`http://numbersapi.com/${number}/date`)
}
