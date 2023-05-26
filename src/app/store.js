import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import topbarReducer from '../features/topbar/topbarSlice';
import accountReducer from '../features/my-account/MyAccountSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    topbar: topbarReducer,
	account:accountReducer
  },
});
