import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  default: {
    id: 'default',
    power: true,
    blocked: false,
    header: 'terminal default mode header',
    footer: 'terminal default mode footer',
    users: [],
    menu: [],
  },
};

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
