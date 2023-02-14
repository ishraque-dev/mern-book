import { configureStore } from '@reduxjs/toolkit';
import userAuthSlice from '../user/userAuth';

const store = configureStore({
  reducer: {
    auth: userAuthSlice.reducer,
  },
});
export default store