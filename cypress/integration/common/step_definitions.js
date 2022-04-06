import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

beforeEach(function() {
    cy.eyesOpen({
        // we are getting this from the applitools.config.js
        // appName: 'Applitools Hackathon - [Team Name]',
        testName: this.currentTest.title,
    })
})
afterEach(() => {
    cy.eyesClose()
    cy.eyesGetAllTestResults().then(summary => {
      console.log(summary)
    })
})

Given('I go to {string}', (url) => {
  cy.visit(url);
});

Then('I see title {string}', (title) => {
  cy.title().should('equal', title);
  cy.eyesCheckWindow();
});

Then('I see text {string}', (text) => {
  cy.get('body').should('contain', text);
});

Then('I see link {string}', (text) => {
  cy.xpath(`//a[text()="${text}"]`).should('have.length', 1);
});
