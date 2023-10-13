import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileErrors } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

const data = {
  username: 'admin',
  firstname: 'Alex',
  lastname: 'Vasiliev',
  age: 24,
  city: 'Kazan',
  country: Country.Russia,
  currency: Currency.RUB,
};

describe('updateProfileData.test', () => {
  test('success fetch', async () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('without first and lastname', async () => {
    const result = validateProfileData({ ...data, firstname: '', lastname: '' });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: 0 });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_CITY,
      ValidateProfileErrors.INCORRECT_COUNTRY,
      ValidateProfileErrors.INCORRECT_CURRENCY,
    ]);
  });
});
