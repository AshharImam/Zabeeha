// import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getOrderAPI, postOrderAPI} from '../Axios/axios';
import {setError} from './errorSlice';

export const checkoutOrder = createAsyncThunk(
  'order/checkoutOrder',
  async (postData, {dispatch}) => {
    let response;
    await postOrderAPI(
      postData.userId,
      postData.productIdCsv,
      postData.quantityCsv,

      postData.total,
      postData.addId,
    )
      .then(res => {
        response = res;
      })
      .catch(e => dispatch(setError(e.message)));

    return response;
  },
);
export const getOrders = createAsyncThunk(
  'order/getOrders',
  async (id, {dispatch}) => {
    let response;
    await getOrderAPI(id)
      .then(res => {
        response = res;
      })
      .catch(e => dispatch(setError(e.message)));
    return response;
  },
);

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: null,
    orderLoading: false,
    fetchOrdersLoading: false,
  },
  reducers: {
    setOrderLoading: (state, action) => {
      state.orderLoading = action.payload;
    },
    setFetchOrdersLoading: (state, action) => {
      state.fetchOrdersLoading = action.payload;
    },
  },
  extraReducers: {
    [checkoutOrder.fulfilled]: (state, {payload}) => {
      state.orderLoading = 'fulfilled';
    },
    [checkoutOrder.pending]: state => {
      state.orderLoading = 'pending';
    },
    [checkoutOrder.rejected]: state => {
      state.orderLoading = 'failed';
    },
    [getOrders.fulfilled]: (state, {payload}) => {
      state.orders = payload;
      state.fetchOrdersLoading = 'fulfilled';
    },
    [getOrders.pending]: state => {
      state.fetchOrdersLoading = 'pending';
    },
    [getOrders.rejected]: state => {
      state.fetchOrdersLoading = 'failed';
    },
  },
});

export const {setOrderLoading, setFetchOrdersLoading} = orderSlice.actions;

export const selectOrders = state => state.order.orders;
export const selectOrderLoading = state => state.order.orderLoading;
export const selectFetchOrdersLoading = state => state.order.fetchOrdersLoading;

export default orderSlice.reducer;
