Feature: Bank selection

Scenario: Search and select Connecteur de test
  Given the user navigates to the bank selection page
  When the user checks the terms and conditions checkbox
  And the user clicks the continue button
  And the user selects "Algoan bank"
  And the user clicks the button j'ai compris
  Then the user should be redirected to the bank connection page