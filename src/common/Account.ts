import Login from 'salesforce-pageobjects/helpers/pageObjects/login';

export default class Account {
  async login(): Promise<void> {
    console.log('1');
    await browser.url('https://test.salesforce.com/');
    console.log('2');
    await browser.pause(5000);
    const loginRoot = await utam.load(Login);
    console.log('3');
    await browser.pause(5000);
    const username = await loginRoot.getUserName();
    await browser.pause(5000);
    await username.clearAndType('xxx');
    const password = await loginRoot.getPassword();
    await password.clearAndType('xxx');
    const submitBtn = await loginRoot.getSubmitBtn();
    await submitBtn.click();
    await browser.pause(5000);
  }
}

export const name = 'test';
