// import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getHomeDataAPI} from '../Axios/axios';
import {loginAsync, logoutAsync} from '../Utils/storage';
import {setError} from './errorSlice';

export const getData = createAsyncThunk('user/data', async (id, {dispatch}) => {
  let response;
  await getHomeDataAPI(id)
    .then(res => {
      response = res;
    })
    .catch(e => dispatch(setError(e.message)));

  return response;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    homeData: null,
    loading: true,
  },
  reducers: {
    login: (state, action) => {
      loginAsync(action.payload);
      state.user = action.payload;
    },
    logout: state => {
      logoutAsync();
      state.user = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [getData.fulfilled]: (state, {payload}) => {
      state.homeData = payload;
      state.loading = false;
    },
    [getData.pending]: state => {
      state.loading = true;
    },
    [getData.rejected]: state => {
      state.loading = 'failed';
    },
  },
});

export const {login, logout, setLoading} = userSlice.actions;

export const selectUser = state => state.user.user;
export const selectLoading = state => state.user.loading;
export const selectHomeData = state => state.user.homeData;

export default userSlice.reducer;
