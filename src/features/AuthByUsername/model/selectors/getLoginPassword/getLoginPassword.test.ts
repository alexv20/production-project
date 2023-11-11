import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from '../getLoginPassword/getLoginPassword';

describe('getLoginIsLoading.test', () => {
  test('should return 123', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });
  test('should return empty string with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
