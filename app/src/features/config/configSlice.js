import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 1,
  standalone: true,
  debug: true,
  api_url: '',
  current: 'default',
  modes: ['default'],
  user: {
    selected: '',
    auth: false
  }
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    currentToggle(state) {
      state.current = !state.current;
    },
    userSelect(state, payload) {
      state.user.selected = payload?.username || '';
    },
    userAuth(state) {
      state.user.auth = true;
    },
    userLogout(state) {
      state.user.auth = false;
      state.user.selected = '';
    }
  },
});

export const {currentToggle, userSelect, userAuth, userLogout} = configSlice.actions;
export default configSlice.reducer;
