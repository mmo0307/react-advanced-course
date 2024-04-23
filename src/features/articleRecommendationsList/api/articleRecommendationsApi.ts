import { rtkApi } from 'shared/api/rtlApi';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getArticleRecommendationsList: build.query({
      query: limit => ({
        url: '/articles',

        params: {
          _limit: limit
        }
      })
    })
  })
});

export const { useGetArticleRecommendationsListQuery } = recommendationsApi;
