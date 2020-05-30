import { getRouterOutlet } from '../support/app.po';

describe('zemoga-ui-test app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display router-outlet', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getRouterOutlet().should((t) => expect(t.length).equal(1));
  });
});
