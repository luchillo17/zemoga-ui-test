# ZemogaUiTest

This project was generated using [Nx](https://nx.dev).

Key aspects of this project:

- Uses Angular and Next.js as a Monorepo, meaning both projects live inside this one, API and UI.
- You have to run the api manually wether you want to run the project, or the e2e tests.
- It's setup in such a way that you need to use a reverse proxy (to avoid disabling CORS, you know, security stuff...), in development is taken care of, but in production it's up to the DevOps team, or the CI/CD config.
- Jumped over the vote confirmation dialog, not enough time.
- Weird advanced techniques were used in the second half of the app, the candidates panels, where svg texts and some math was used to try and keep it responsive, or keep the aspect ratio true to the design, not the best result but given the time constraints, it's decent.
- Also the first part for Pope Francis, since there was no design for mobile, all effort on that section was put in the desktop resolution.

## How to run

First install the deps with `npm i`, make sure to have installed the Angular CLI globally.

To run the project run these 2 commands in different terminal tabs or windows, preferably in that order:

- API command: ng serve api
- UI command: npm start

To run the e2e with Cypress run these 2 in same order, the watch flag is only if you want to see the result of the tests in the browser, or if you're developing with BDD or TDD methodology:

- API command: ng serve api
- E2E command: ng run zemoga-ui-test-e2e:e2e --watch
