import Account from '../common/Account';

describe('Test Login', () => {
  it('Login', async (): Promise<void> => {
    new Account().login();
  });
});
