import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import topbarReducer from '../features/topbar/topbarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    topbar: topbarReducer
  },
});
