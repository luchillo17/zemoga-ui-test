import { getCandidates, getHomeBanner, getHomeHeader } from '../support/app.po';

describe('zemoga-ui-test home', () => {
  beforeEach(() => cy.visit('/'));

  it('should display pope francis banner with header', () => {
    getHomeBanner().should('exist');

    getHomeHeader().should('exist');
  });

  it('should display 4 candidates', () => {
    // Function helper example, see `../support/app.po.ts` file
    getCandidates().should((t) => expect(t.length).equal(4));
  });
});
