import { configureStore } from '@reduxjs/toolkit';
import barReducer from '../features/Bar/barSlice';
import cardReducer from '../features/CardTable/cardSlice';

export const store = configureStore({
  reducer: {
    bar: barReducer,
    card: cardReducer,
  },
});
