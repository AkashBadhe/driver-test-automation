// tests/example.spec.js
const { test, expect, page } = require('@playwright/test');

test('Screener', async ({ page }) => {
  await page.goto('https://www.screener.in/');
  await page.getByRole('searchbox', { name: 'Search for a company' }).click();
  await page
    .getByRole('searchbox', { name: 'Search for a company' })
    .fill('titan');
  await page.getByText('Titan Company Ltd').click();

  const marketCap = await page
    .locator('#top-ratios li')
    .nth(0)
    .locator('span')
    .nth(1)
    .textContent();

  const pe = await page
    .locator('#top-ratios li')
    .nth(3)
    .locator('span')
    .nth(1)
    .textContent();
  const marketCapValue = marketCap.replace(/\s+/g, ' ').trim();
  const peValue = pe.replace(/\s+/g, ' ').trim();
  console.log('PE: ', peValue);
  console.log('Market Cap', marketCapValue);
});
