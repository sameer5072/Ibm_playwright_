// @ts-check
import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';

test('contact page title', async ({page}) => {
  await page.goto('http://127.0.0.1:5500/contact.html');
  await expect(page).toHaveTitle(/Pet Shop/);
});

test('contact page submit', async ({page}) => {
  await page.goto('http://127.0.0.1:5500/contact.html');
  
  const email = page.getByPlaceholder(/name@/);
  const msg = page.locator('#exampleFormControlTextarea1');

  const btn = page.getByText('Submit');

  email.fill('aaryan@gmail.com');
  msg.fill('asdfghjklk');

  await btn.click();
  await msg.screenshot({type: 'png', path: './msg.png'});
  await btn.screenshot({type: 'png', path: './button.png'});
  await page.screenshot({fullPage: true, type: 'png', path: './meow.png'});
});




[
    {email:"sameer@gmail.com",msg:"Hellosamefkhegkufeer"},
    {email:"sammu@gmail.com",msg:"hellokdwkukjcbwdkjvsameer"}
].forEach(obj =>{
    test(`loaclhost 3000 contact test for ${obj.email}`,async({page})=>{
        await page.goto('http://localhost:5500/contact.html');
        // await page.getByRole('textbox' ,{name:'name@example.com'}).click();
        // await page.getByRole('textbox',{name:"name@example.com"}).fill(obj.email);
        await page.locator('#exampleFormControlInput1').click();
        await page.locator('#exampleFormControlInput1').fill(obj.email);

        await page.locator('#exampleFormControlTextarea1').click();
        await page.locator('#exampleFormControlTextarea1').fill(obj.msg);
        page.once('dialog',dialog=>{
            console.log(`Dialog message:${dialog.message()}`);
            dialog.dismiss().catch(()=>{});

        });
        await page.getByRole('button',{name:/Submit/}).click();

    })

})


test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});