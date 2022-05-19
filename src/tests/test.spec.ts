import Auth from '../common/Auth';
import { navigateToAppAndTab } from '../utils/navigationUtils';

describe('Test', async (): Promise<void> => {
  // pre test steps
  before(async (): Promise<void> => {
    // max viewport
    await browser.maximizeWindow();
  });

  describe('Login', async (): Promise<void> => {
    it('Login', async (): Promise<void> => {
      // login as test user
      await Auth.loginSalesforce(
        'victor.wang@aurea.com.tebs.victor',
        'AXR0nfp0gyu4kwu.kjz'
      );
    });

    it('Go to Sales Cloud Home Tab', async (): Promise<void> => {
      await navigateToAppAndTab('Sales', 'Standard', 'Home');
    });

    it('Go to Service Cloud Home Tab', async (): Promise<void> => {
      await navigateToAppAndTab('Sales Console', 'Console', 'Home');
    });

    it('Logout', async (): Promise<void> => {
      // log out test user
      await Auth.logoutSalesforce();
    });
  });
});
