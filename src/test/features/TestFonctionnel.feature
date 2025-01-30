Feature: Bank selection/Connection

Scenario: Search and select Bank
  Given the user navigates to the bank selection page
  When the user checks the terms and conditions checkbox
  And the user clicks the continue button
  And the user selects "Algoan bank"
  Then the user should see the bank connection page

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
  Then the user should see the account selection page


  Scenario: Bank Connection Failure
  Given the user navigates to the bank selection page
  When the user checks the terms and conditions checkbox
  And the user clicks the continue button
  And the user selects "Algoan bank"
  And the user clicks the button j'ai compris
  And the user should see the bank connection page and the user chooses an account
  And the user click to Connecter la banque
  When the user click to the button refuser l'accès
  Then the user should see the transmission failure message