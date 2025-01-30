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



