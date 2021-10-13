import {createSlice} from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'errorSlice',
  initialState: {
    error: null,
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setError} = errorSlice.actions;

export const selectError = state => state.error.error;

export default errorSlice.reducer;
