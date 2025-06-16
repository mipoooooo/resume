const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file://' + process.cwd().replace(/\\/g, '/') + '/index.html', { waitUntil: 'networkidle0' });
  await page.pdf({ path: 'resume.pdf', format: 'A4' });
  await browser.close();
})();
