let profileId = '';

describe('User visit profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then(data => {
      profileId = data.id;

      cy.visit(`/profile/${data.id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('profile succeed load', () => {
    cy.getByTestId('ProfileCard.firstName').should('have.value', 'test');
  });

  it('profile succeed edit', () => {
    const newName = 'new';
    const newLastname = 'lastname';

    cy.updateProfile(newName, newLastname);

    cy.getByTestId('ProfileCard.firstName').should('have.value', newName);
    cy.getByTestId('ProfileCard.lastName').should('have.value', newLastname);
  });
});
