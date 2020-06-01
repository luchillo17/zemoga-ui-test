import {
  getCandidates,
  getHomeBanner,
  getHomeHeader,
  getFirstCandidate,
} from '../support/app.po';

describe('zemoga-ui-test home', () => {
  beforeEach(() => {
    cy.resetVotes();
    cy.visit('/');
  });

  it('should display pope francis banner with header', () => {
    getHomeBanner().should('exist');

    getHomeHeader()
      .should('exist')
      .find('span:first-child')
      .should('contain.text', 'Rule of thumb.');
  });

  it('should have link Past Trials and redirect', () => {
    getHomeHeader().find('a#past-trials-link').should('exist').click();
    cy.location('pathname').should('eq', '/past-trials');
  });

  it('should have link Past Trials and redirect', () => {
    getHomeHeader().find('a#how-it-works-link').should('exist').click();
    cy.location('pathname').should('eq', '/how-it-works');
  });

  it('should have link Past Trials and redirect', () => {
    getHomeHeader().find('a#log-in-sign-up-link').should('exist').click();
    cy.location('pathname').should('eq', '/log-in-sign-up');
  });

  it('should display 4 candidates and allow to vote accordingly', () => {
    getCandidates()
      .should((t) => expect(t.length).equal(4))
      .first()
      .contains('50%');

    getFirstCandidate().find('.candidate-vote-up-button').click();

    getFirstCandidate().find('.thumbs-up-metric').contains('100%');

    getFirstCandidate().find('.candidate-vote-down-button').click().click();

    getFirstCandidate().find('.thumbs-up-metric').contains('33%');
    getFirstCandidate().find('.thumbs-down-metric').contains('67%');
  });
});
