import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  register,
  registerGoogle,
  logOut,
  update,
  refreshUser,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isError: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(register.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      })

      .addCase(registerGoogle.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerGoogle.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(registerGoogle.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      })

      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(logIn.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      })

      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLogin = false;
      })
      .addCase(logOut.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(update.pending, state => {
        state.isLoading = true;
      })
      .addCase(update.fulfilled, state => {
        state.user = action.payload.user;
        state.isLoading = false;
      })
      .addCase(update.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogin = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;