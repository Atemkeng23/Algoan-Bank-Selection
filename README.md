# Algoan-Bank-Selection

Application  de décision de Credit Bancaire développer en Tyscript avec Playwright pour l'automatisation et Cucumber pour la gestion des scenario de test.

## Prérequis

- Node.js (version LTS recommandée)
- npm (inclus avec Node.js)
- Playwright
- Cucumber@cucumber

## Installation

1. Clonez le dépôt :

   ```sh

   git clone https://github.com/votre-utilisateur/algoan-bank-selection.git

   cd algoan-bank-selection
   ```
2. Installez les dépendances :

   npm install
3. Installez les navigateurs Playwright : npx playwright install --with-deps.


   npx cucumber-js
   npm test

   ## Structure du Projet

Algoan-Bank-Selection/
├── .github/
│   └── workflows/
│       └── ci.yml
├── node_modules/
├── src/
│   ├── corelib/
│   │   └── basePage.spec.ts
│   ├── test/
│   │   ├── features/
│   │   │   └── bankSelection.feature
│   │   ├── pages/
│   │   │   └── BankSelectionPage.ts
│   │   └── steps/
│   │       └── bankSelection.spec.ts
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
4. Définition des Scénarios de Test Fonctionnel

   `Feature: Bank Selection and Connection

   Scenario: Search and select Bank
   Given the user navigates to the bank selection page
   When the user checks the terms and conditions checkbox
   And the user clicks the continue button
   And the user selects "Algoan bank"
   Then the user should see the bank connection page

   Scenario: Bank Connection
   Given the user navigates to the bank selection page
   When the user checks the terms and conditions checkbox
   And the user clicks the continue button
   And the user selects "Algoan bank"
   And the user clicks the button j'ai compris
   And the user should see the bank connection page and the user chooses an account
   And the user click to Connecter la banque
   When the user click to the button refuser l'accès
   Then the user should see the transmission failure message

   Scenario: Bank Connection done
   Given the user navigates to the bank selection page
   When the user checks the terms and conditions checkbox
   And the user clicks the continue button
   And the user selects "Algoan bank"
   And the user clicks the button j'ai compris
   Then the user should see the welcome page
   When the user clicks the Admin button
   And the user selects the dossier option
   And the user clicks the Connecter la banque button
   And the user clicks the Autoriser l'accès button
   Then the user should see the account selection page`
6. ## Définition des Scénarios de Test Non Fonctionnel

Feature: Performance Testing And comparability Testing

Feature: Performance Testing

Scenario: Page Load Time

  Given the user go to bank selection page

  And  the user click the terms and conditions checkbox

  When the user clicks the {string} button

  Then the page should load in less than 3 seconds

Scenario: Compatibility browser Testing

Scenario: Browser Compatibility

  Given the user navigate to the bank selection pages

  When the user uses different browsers (Chrome, Firefox, Safari, Edge)

  Then the page should render correctly on all browsers
