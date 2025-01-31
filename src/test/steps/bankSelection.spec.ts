import { Given, When, Then, After, Before } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { expect } from '@playwright/test';
import { BankSelectionPage } from '../pages/BankSelectionPage';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let bankSelectionPage: BankSelectionPage;

Before(async function () {
  browser = await chromium.launch({ headless: true }); // Ensure headless mode is enabled
  context = await browser.newContext();
  page = await context.newPage();
  bankSelectionPage = new BankSelectionPage(page);
});
// Step definitions
Given('the user navigates to the bank selection page', async function () {
  await bankSelectionPage.navigateTo();
});
//the user checks the terms and conditions checkbox
When('the user checks the terms and conditions checkbox', async function () {
  await bankSelectionPage.checkTermsAndConditions();
});
//the user clicks the continue button
When('the user clicks the continue button', async function () {
  await bankSelectionPage.clickContinueButton();
});

//the user selects Algoan
When('the user selects {string}', async function (bankName: string) {
  await bankSelectionPage.selectBank(bankName);
});

//the user should see the bank connection page
Then('the user should see the bank connection page', async function () {
  await expect(page.getByRole('heading', { name: 'Connectez votre banque' })).toBeVisible();
  await browser.close(); // Fermer le navigateur après le premier scénario
});

//the user clicks the button j'ai compris
When('the user clicks the button j\'ai compris', async function () {
    await bankSelectionPage.clickJaiComprisButton();
});

//the user should see the redirection message
When('the user should see the bank connection page and the user chooses an account', async function () {
    await bankSelectionPage.selectAccount();
});

//the user clicks the button connecter la banque
When('the user click to Connecter la banque', async function () {
    await bankSelectionPage.clickConnecterLaBanque();
});

//the user clicks the button rfuser l'accès
When('the user click to the button refuser l\'accès', async function () {
    await bankSelectionPage.clickRefuserLacces();
});

//the user should see the transmission failure message
Then('the user should see the transmission failure message', async function () {
    await expect(page.getByRole('heading', { name: 'Échec de la transmission', exact: true })).toBeVisible();
    await browser.close(); // Fermer le navigateur après le deuxième scénario
});

Then('the user should see the welcome page', async function () {
    await bankSelectionPage.connectPage();
});

When('the user clicks the Admin button', async function () {
    await bankSelectionPage.selectAdmin();
});

When('the user selects the dossier option', async function () {
    await bankSelectionPage.selectDossier();
});

When('the user clicks the Connecter la banque button', async function () {
    await bankSelectionPage.clickConnecterLaBanque();
});

//the user clicks the Autoriser l'accès button
When('the user clicks the Autoriser l\'accès button', async function () {
    await bankSelectionPage.clickAccepterLacces();
});

Then('the user should see the account selection page', async function () {
  await page.waitForTimeout(15000); // Attendre 15 secondes pour que la page se charge
  await expect(page.getByRole('heading', { name: /Sélectionnez les comptes à/i })).toBeVisible();
});

//closing the browser
After(async function () {
  if (page && !page.isClosed()) await page.close();
  if (context && context.pages().length > 0) await context.close();
  if (browser && browser.contexts().length > 0) await browser.close();
});