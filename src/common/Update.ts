import SalesforceLogout from 'pageObjects/salesforceLogout';
import Classic from 'pageObjects/classic';
import DeleteValuePage from 'pageObjects/deleteValuePage';
import EditValuePage from 'pageObjects/editValuePage';

export default class Update {
  static switchToClassicMode = async (): Promise<void> => {
    const salesforceLogoutRoot = await utam.load(SalesforceLogout);
    await salesforceLogoutRoot.switchToClassic();
  };

  static openFieldSetupPage = async (): Promise<void> => {
    const classicRoot1 = await utam.load(Classic);
    await classicRoot1.openClassicSetup();
    const classicRoot2 = await utam.load(Classic);
    await classicRoot2.searchClassicSetup('Product');
    const classicRoot3 = await utam.load(Classic);
    await classicRoot3.openProductFieldsSetup();
    const classicRoot4 = await utam.load(Classic);
    await classicRoot4.openProductTypeField();
  };

  static deleteValues = async (): Promise<void> => {
    const valuesToDeleteArr = [
      {
        valueLabel: 'Test 3',
      },
      {
        valueLabel: 'Test 5',
      },
    ];

    // resolve values, use label to check if valid to delete
    for (let i = 0; i < valuesToDeleteArr.length; i++) {
      const classicRoot = await utam.load(Classic);

      const { valueLabel } = valuesToDeleteArr[i];

      const fieldValue = await classicRoot.getProductTypeValueByLabel(
        valueLabel
      );

      console.log(' ');
      console.log('============ Deleting =================== ');
      console.log('expected deleting label ', valueLabel);
      console.log('========================================= ');
      console.log(' ');

      await fieldValue.delete();
      await browser.acceptAlert();

      const deleteValuePageRoot = await utam.load(DeleteValuePage);
      await deleteValuePageRoot.selectBlankValueAndSave();
    }
  };

  static renameValues = async (): Promise<void> => {
    const valuesToRenameArr = [
      {
        existingValueLabel: 'Test 6',
        existingValueAPI: '6',
        newValueLabel: 'Test 6-6',
        newValueAPI: '6-6',
      },
      {
        existingValueLabel: 'Test 7',
        existingValueAPI: '7',
        newValueLabel: 'Test 7-7',
        newValueAPI: '7-7',
      },
    ];

    // resolve values, use label to check if valid to rename
    for (let i = 0; i < valuesToRenameArr.length; i++) {
      const classicRoot = await utam.load(Classic);

      const { existingValueLabel, newValueLabel, newValueAPI } =
        valuesToRenameArr[i];

      const fieldValue = await classicRoot.getProductTypeValueByLabel(
        existingValueLabel
      );

      console.log(' ');
      console.log('============ Updating =================== ');
      console.log('expected renaming label ', existingValueLabel);
      console.log('new label ', newValueLabel);
      console.log('new API ', newValueAPI);
      console.log('========================================= ');
      console.log(' ');

      await fieldValue.edit();

      const editValuePageRoot = await utam.load(EditValuePage);
      await editValuePageRoot.setLabel(newValueLabel);
      await editValuePageRoot.setApiName(newValueAPI);
      await editValuePageRoot.save();
    }
  };
}
