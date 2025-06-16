const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const filePath = path.resolve(__dirname, 'index.html');
  await page.goto('file://' + filePath.replace(/\\\\/g, '/'), { waitUntil: 'networkidle0' });
  await page.pdf({ path: 'resume.pdf', format: 'A4' });
  await browser.close();
})();
