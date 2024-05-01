describe('Роутинг', () => {
  describe('Пользователь НЕ авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.get('[data-testid=MainPage]').should('exist');
      cy.getByTestId('MainPage').should('exist');
    });

    it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/1');
      cy.getByTestId('MainPage').should('exist');
    });

    it('Переход открывает несуществующий маршрут ', () => {
      cy.visit('/fasfasfasf');
      cy.getByTestId('NotFoundPage').should('exist');
    });
  });

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login();
    });

    it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/1');
      cy.getByTestId('ProfilePage').should('exist');
    });

    it('Переход открывает страницу со списком статей', () => {
      cy.visit('/articles');
      cy.getByTestId('ArticlePage').should('exist');
    });
  });
});
