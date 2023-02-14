import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  userCredentials: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
};
const userAuthSlice = createSlice({
  name: 'login',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.userCredentials = action.payload;
    },
  },
});
export const userAuthActions = userAuthSlice.actions;
export default userAuthSlice;
