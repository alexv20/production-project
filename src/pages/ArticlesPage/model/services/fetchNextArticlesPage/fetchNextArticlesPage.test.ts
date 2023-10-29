import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
  test('success fetch', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        limit: 5,
        isLoading: false,
        hasMore: true,
        ids: [],
        entities: {},
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch)
      .toBeCalledTimes(4);
    expect(fetchArticlesList)
      .toBeCalledWith({});
  });

  test('not called without has more', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        limit: 5,
        isLoading: false,
        hasMore: false,
        ids: [],
        entities: {},
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
