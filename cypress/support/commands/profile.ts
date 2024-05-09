export const updateProfile = (firstName: string, lastName: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();

  cy.getByTestId('ProfileCard.firstName').clear().type(firstName);

  cy.getByTestId('ProfileCard.lastName').clear().type(lastName);

  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asasf' },
    body: {
      id: '4',
      firstName: 'test',
      lastName: 'user',
      age: '465',
      currency: 'EUR',
      country: 'Ukraine',
      city: 'Dnipro',
      username: 'testuser',
      avatar:
        'https://openseauserdata.com/files/b261626a159edf64a8a92aa7306053b8.png'
    }
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;

      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
