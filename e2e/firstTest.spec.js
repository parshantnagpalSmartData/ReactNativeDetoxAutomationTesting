const { device } = require('detox');

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });


  it('Login Test Case Successfull', async () => {
    await expect(element(by.id('email'))).toBeVisible();

      // Getting the reference and typing
    await element(by.id('email')).typeText('test@gmail.com');
    await element(by.id('password')).typeText('abc123');

    await element(by.id('AuthButton')).tap();
    await expect(element(by.text('You are on Dashboard'))).toBeVisible();
    await expect(element(by.id('email'))).toNotExist();
    // await expect(element(by.text('123123213'))).toBeVisible();
  });


  it('Login Test Case Failure', async () => {
    await expect(element(by.id('email'))).toBeVisible();

      // Getting the reference and typing
    await element(by.id('email')).typeText('abc@gmail.com');
    await element(by.id('password')).typeText('123456');

    await element(by.id('AuthButton')).tap();
    await expect(element(by.text('Please enter a valid email or password'))).toBeVisible();

  });

  it('Login Test Case Failure Wrong Email and Logout Test Case', async () => {
    await expect(element(by.id('email'))).toBeVisible();

      // Getting the reference and typing
    await element(by.id('email')).typeText('abc');
    await element(by.id('AuthButton')).tap();
    await expect(element(by.text('Invalid Email format'))).toBeVisible();
    await element(by.text('OK')).tap();
    await element(by.id('email')).clearText();


    // await element(by.text('Ok')).tap();
    await element(by.id('email')).typeText('test@gmail.com');

    await element(by.id('password')).typeText('abc123');
    await element(by.id('AuthButton')).tap();
    await expect(element(by.text('You are on Dashboard'))).toBeVisible();
    await element(by.id('Logout')).tap();
    // await element(by.text('OK')).tap();
    await expect(element(by.text('Welcome'))).toBeVisible();
  });

});