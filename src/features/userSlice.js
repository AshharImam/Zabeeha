// import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {
  getUserAsync,
  loginAsync,
  logoutAsync,
  setChartAsync,
} from '../Utils/storage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      loginAsync(action.payload);
      state.user = action.payload;
    },
    logout: state => {
      setChartAsync('');
      logoutAsync();
      state.user = null;
    },
  },
});

export const {login, logout} = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;
