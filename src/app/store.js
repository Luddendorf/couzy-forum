import { configureStore } from '@reduxjs/toolkit';
import inputTextReducer from '../components/inputText/inputTextSlice';
import counterReducer from '../features/counter/counterSlice';
import topbarReducer from '../features/topbar/topbarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    inputText: inputTextReducer,
    topbar: topbarReducer
  },
});
