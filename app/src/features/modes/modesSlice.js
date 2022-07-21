import { createSlice } from '@reduxjs/toolkit';
import defaultMode from './constants';

const initialState = defaultMode;

const modesSlice = createSlice({
  name: 'modes',
  initialState,
  reducers: {
    blockToggle(state) {
      state.blocked = !state.blocked;
    },
    powerToggle(state) {
      state.power = !state.power;
    }
  },
});


export const {blockToggle, powerToggle} = modesSlice.actions;
export default modesSlice.reducer;
