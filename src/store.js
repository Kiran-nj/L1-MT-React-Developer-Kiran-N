import { configureStore } from '@reduxjs/toolkit';
import continentReducer from './continentSlice';

export const store = configureStore({
  reducer: {
    continent: continentReducer,
  },
});
