import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../corelib/basePage.spec';
import { BankSelectionPage } from '../pages/bankSelectionPage';

let bankSelectionPage: BankSelectionPage;

Given('the user navigates to the bank selection page', async function () {
  bankSelectionPage = new BankSelectionPage(page);
  await bankSelectionPage.navigateTo();
});

When('the user checks the terms and conditions checkbox', async function () {
  await bankSelectionPage.checkTermsAndConditions();
});

When('the user clicks the continue button', async function () {
  await bankSelectionPage.clickContinueButton();
});

When('the user selects {string}', async function (bankName: string) {
  await bankSelectionPage.selectBank(bankName);
});

When('the user clicks the button j\'ai compris', async function () {
  await bankSelectionPage.clickJaiComprisButton();
});

Then('the user should be redirected to the bank connection page', { timeout: 120 * 1000 }, async function () {
  await bankSelectionPage.verifyRedirection();
});

