import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentFormSchema';

const initialState: AddCommentFormSchema = {
  isLoading: false,
  error: '',
  text: '',
};

export const addCommentFormSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(loginByUsername.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.error = action.payload;
  //       state.isLoading = false;
  //     });
  // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
