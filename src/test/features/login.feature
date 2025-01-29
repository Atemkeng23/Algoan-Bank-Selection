Feature: User Authentication

Scenario: Login to the bank like Admin
  Given the user is to the bank selection page
  When the user chooses an account
  And the user click to Connecter la banque
  And the user click to the button refuser l'accès
  Then the user should see the transmission failure message