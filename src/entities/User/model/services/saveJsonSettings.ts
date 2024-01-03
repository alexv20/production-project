import { createAsyncThunk } from '@reduxjs/toolkit';
import { JsonSettings } from '../types/jsonSettings';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
  // @ts-ignore (ignore catch promise error)
>('user/saveJsonSettings', async (updatedJsonSettings, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi;
  const userData = getUserAuthData(getState());
  const currentSettings = getJsonSettings(getState());

  if (!userData) {
    return rejectWithValue('');
  }

  try {
    const response = await dispatch(
      setJsonSettingsMutation({
        userId: userData.id,
        jsonSettings: {
          ...currentSettings,
          ...updatedJsonSettings,
        },
      }),
    ).unwrap();

    if (response.jsonSettings) {
      return rejectWithValue('');
    }

    return response.jsonSettings;
  } catch (err) {
    console.log(err);
    return rejectWithValue('');
  }
});
