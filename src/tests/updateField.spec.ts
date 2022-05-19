import Auth from '../common/Auth';
import Update from '../common/Update';

describe('Update', async (): Promise<void> => {
  // pre test steps
  before(async (): Promise<void> => {
    // max viewport
    await browser.maximizeWindow();
  });

  describe('Update', async (): Promise<void> => {
    it('Login', async (): Promise<void> => {
      await Auth.loginSalesforce('', '');
    });

    it('Go to classic mode', async (): Promise<void> => {
      await Update.switchToClassicMode();
    });

    it('Go to object field setup', async (): Promise<void> => {
      await Update.openFieldSetupPage();
    });

    it('Delete values', async (): Promise<void> => {
      await Update.deleteValues();
    });

    it('Rename values', async (): Promise<void> => {
      await Update.renameValues();
    });

    it('Wait for manually logout', async (): Promise<void> => {
      await browser.pause(100000);
    });
  });
});
