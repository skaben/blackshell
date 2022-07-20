import { configureStore } from '@reduxjs/toolkit';
import modesReducer from 'Features/modes/modesSlice';
import configReducer from 'Features/config/configSlice';

export const store = configureStore({
  reducer: {
    config: configReducer,
    modes: modesReducer
  },
});
