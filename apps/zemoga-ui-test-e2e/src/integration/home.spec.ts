import { getCandidates, getHomeBanner, getHomeHeader } from '../support/app.po';

describe('zemoga-ui-test home', () => {
  beforeEach(() => cy.visit('/'));

  it('should display pope francis banner with header', () => {
    getHomeBanner().should('exist');

    getHomeHeader()
      .should('exist')
      .get('span:first-child')
      .should('contain.text', 'Rule of thumb.');
  });

  it('should have link Past Trials and redirect', () => {
    getHomeHeader().get('a#past-trials-link').should('exist').click();
    cy.location('pathname').should('eq', '/past-trials');
  });

  it('should have link Past Trials and redirect', () => {
    getHomeHeader().get('a#how-it-works-link').should('exist').click();
    cy.location('pathname').should('eq', '/how-it-works');
  });

  it('should have link Past Trials and redirect', () => {
    getHomeHeader().get('a#log-in-sign-up-link').should('exist').click();
    cy.location('pathname').should('eq', '/log-in-sign-up');
  });

  it('should display 4 candidates', () => {
    // Function helper example, see `../support/app.po.ts` file
    getCandidates().should((t) => expect(t.length).equal(4));
  });
});
