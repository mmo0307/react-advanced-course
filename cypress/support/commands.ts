import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localeStorage';

function login(username: string = 'user', password: string = '123') {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password
    }
  }).then(({ body }) => {
    window.localStorage.setItem(
      USER_LOCALSTORAGE_KEY || 'user',
      JSON.stringify(body)
    );
  });
}

Cypress.Commands.add('login', login);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<void>;
    }
  }
}

export {};
