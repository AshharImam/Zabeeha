// import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getCategoryProduct} from '../Axios/axios';
import {setError} from './errorSlice';

export const getProducts = createAsyncThunk(
  'products/data',
  async (_, {dispatch}) => {
    let response;

    await getCategoryProduct()
      .then(res => {
        response = res;
      })
      .catch(e => dispatch(setError(e.message)));

    return response;
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: null,
    productLoading: false,
  },
  reducers: {
    setProductLoading: (state, action) => {
      state.productLoading = action.payload;
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, {payload}) => {
      state.products = payload;
      state.productLoading = false;
    },
    [getProducts.pending]: state => {
      state.productLoading = true;
    },
    [getProducts.rejected]: state => {
      state.productLoading = 'failed';
    },
  },
});

export const {setProductLoading} = productsSlice.actions;

export const selectProducts = state => state.products.products;
export const selectProductLoading = state => state.products.productLoading;

export default productsSlice.reducer;
