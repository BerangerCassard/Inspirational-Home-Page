import { configureStore } from '@reduxjs/toolkit';
import barReducer from '../features/Bar/barSlice';

export const store = configureStore({
  reducer: {
    bar: barReducer,
  },
});