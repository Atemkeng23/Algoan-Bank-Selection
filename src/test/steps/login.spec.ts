import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../corelib/basePage.spec';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

Given('the user is to the bank selection page', async function () {
  loginPage = new LoginPage(page);
  await loginPage.navigateTo();
});

When('the user chooses an account', async function () {
  await loginPage.chooseAccount();
});

When('the user click to Connecter la banque', async function () {
  await loginPage.clickConnectBank();
});

When('the user click to the button refuser l\'accès', async function () {
  await loginPage.clickDeny();
});

Then('the user should see the transmission failure message', { timeout: 230 * 1000 }, async function () {
  await loginPage.verifyTransmissionFailure();
});