import { getCandidates } from '../support/app.po';

describe('zemoga-ui-test home', () => {
  beforeEach(() => cy.visit('/'));

  it('should display 4 candidates', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getCandidates().should((t) => expect(t.length).equal(4));
  });
});
