const { device } = require('detox');

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have "Step One" section', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('should have "See Your Changes" section', async () => {
    await element(by.id('MyUniqueId123')).tap();
    await expect(element(by.text('123123213'))).toBeVisible();
  });
});