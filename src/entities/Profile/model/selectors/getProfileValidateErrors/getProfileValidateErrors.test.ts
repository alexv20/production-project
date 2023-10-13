import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileErrors } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileForm.test', () => {
  test('should return validate error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileErrors.SERVER_ERROR,
          ValidateProfileErrors.NO_DATA,
          ValidateProfileErrors.INCORRECT_AGE,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileErrors.SERVER_ERROR,
      ValidateProfileErrors.NO_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
    ]);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
