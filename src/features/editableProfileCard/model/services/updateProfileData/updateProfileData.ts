import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from 'entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrors[]>
  >(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
      const formData = getProfileForm(getState());

      const errors = validateProfileData(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      try {
        const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);
        if (!response.data) {
          throw new Error();
        }
        return response.data;
      } catch (e) {
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
      }
    },
  );
