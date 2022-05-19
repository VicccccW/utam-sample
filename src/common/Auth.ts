import SalesforceLogin from 'pageObjects/salesforceLogin';
import SalesforceLogout from 'pageObjects/salesforceLogout';

export default class Auth {
  static loginSalesforce = async (
    username: string,
    password: string
  ): Promise<void> => {
    // open login url
    await browser.url('https://test.salesforce.com');

    // load the page object
    const salesforceLoginRoot = await utam.load(SalesforceLogin);
    await salesforceLoginRoot.login(username, password);

    // wait for page fully loaded
    const domDocument = utam.getCurrentDocument();

    await domDocument.waitFor(async () =>
      (await domDocument.getUrl()).includes('/lightning')
    );

    await browser.pause(4000);
  };

  /**
   * @description logout current test user from Salesforce
   */
  static logoutSalesforce = async (): Promise<void> => {
    await browser.pause(2000);

    // load the page object
    const salesforceLogoutRoot = await utam.load(SalesforceLogout);
    await salesforceLogoutRoot.clickProfile();
    await browser.pause(3000);
    await salesforceLogoutRoot.clickLogout();

    // open login url to force logout
    await browser.url('https://test.salesforce.com');
    await browser.reloadSession();
  };
}
