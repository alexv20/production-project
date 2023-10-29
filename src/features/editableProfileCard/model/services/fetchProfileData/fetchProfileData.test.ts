import axios from 'axios';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { fetchProfileData } from './fetchProfileData';

const data = {
  username: 'admin',
  firstname: 'Alex',
  lastname: 'Vasiliev',
  age: 24,
  city: 'Kazan',
  country: Country.Russia,
  currency: Currency.RUB,
};

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('fetchProfileData.test', () => {
  test('success fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
