import {test,expect} from '@playwright/test';


test('myntra shopping ',async({page})=>{
    await page.goto('www.myntra.com/');
    await expect(page).toHaveTitle('Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra');
});



