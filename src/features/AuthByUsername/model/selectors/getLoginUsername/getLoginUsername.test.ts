import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';

describe('getLoginIsLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });
  test('should return empty string with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
