// import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAddressListAPI, getCategoryProduct} from '../Axios/axios';
import {setError} from './errorSlice';

export const getAddresses = createAsyncThunk(
  'address/getAddress',
  async (id, {dispatch}) => {
    let response;
    await getAddressListAPI(id)
      .then(res => {
        response = res;
      })
      .catch(e => dispatch(setError(e.message)));

    return response;
  },
);

export const addressSlice = createSlice({
  name: 'address',
  initialState: {
    addresses: null,
    addressLoading: false,
    types: [
      {
        id: 1,
        title: 'Home',
      },
      {
        id: 2,
        title: 'Office',
      },
      {
        id: 3,
        title: 'Others',
      },
    ],
  },
  reducers: {
    setAddressLoading: (state, action) => {
      state.addressLoading = action.payload;
    },
  },
  extraReducers: {
    [getAddresses.fulfilled]: (state, {payload}) => {
      state.addresses = payload.reverse();
      state.addressLoading = false;
    },
    [getAddresses.pending]: state => {
      state.addressLoading = true;
    },
    [getAddresses.rejected]: state => {
      state.addressLoading = 'failed';
    },
  },
});

export const {setAddressLoading} = addressSlice.actions;

export const selectAddresses = state => state.address.addresses;
export const selectAddressLoading = state => state.address.addressLoading;
export const selectTypeOfAddress = state => state.address.types;

export default addressSlice.reducer;
