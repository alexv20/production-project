import { rtkApi } from 'shared/api/rtkApi';

const recommenationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const useArticleRecommendationsList = recommenationsApi.useGetArticleRecommendationsListQuery;
