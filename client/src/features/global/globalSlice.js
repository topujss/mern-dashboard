import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    mode: 'dark',
  },
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

// export actions
export const { setMode } = globalSlice.actions;

//export reducers
export default globalSlice.reducer;
