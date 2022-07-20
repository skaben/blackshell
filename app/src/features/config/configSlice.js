import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 1,
  standalone: true,
  debug: true,
  api_url: '',
  current: 'default',
  modes: ['default'],
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    currentToggle(state) {
      state.current = !state.current;
    }
  },
});

export const {currentToggle} = configSlice.actions;
export default configSlice.reducer;
