import { Article } from '@/entities/Article';

const defaultArticle = {
  title: 'TESTING ARTICLE',
  subtitle: 'БиологиЯ',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  views: 1022,
  createdAt: '26.02.2022',
  userId: '1',
  type: ['SCIENCE'],
  blocks: []
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/articles',
      headers: { Authorization: 'asasf' },
      body: article ?? defaultArticle
    })
    .then(({ body }) => body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asasf' }
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;

      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
