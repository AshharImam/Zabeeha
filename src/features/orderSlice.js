// import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {cancelOrderAPI, getOrderAPI, postOrderAPI} from '../Axios/axios';
import {setError} from './errorSlice';
import {setLoading} from './userSlice';

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
export const cancelOrder = createAsyncThunk(
  'order/cancelOrder',
  async ({orderId, userId}, {dispatch}) => {
    let response;
    await cancelOrderAPI(orderId)
      .then(res => {
        response = res;
        dispatch(getOrders(userId));
        dispatch(
          setError({
            message: 'Order has been deleted successfully!',
            type: 'm',
          }),
        );
      })
      .catch(e => {
        dispatch(setError(e.message));
      });

    return response;
  },
);

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: null,
    orderLoading: false,
    fetchOrdersLoading: false,
    cancelOrderLoading: false,
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
    [cancelOrder.fulfilled]: (state, {payload}) => {
      state.fetchOrdersLoading = 'fulfilled';
    },
    [cancelOrder.pending]: state => {
      state.fetchOrdersLoading = 'pending';
    },
    [cancelOrder.rejected]: state => {
      state.fetchOrdersLoading = 'failed';
    },
  },
});

export const {setOrderLoading, setFetchOrdersLoading} = orderSlice.actions;

export const selectOrders = state => state.order.orders;
export const selectOrderLoading = state => state.order.orderLoading;
export const selectFetchOrdersLoading = state => state.order.fetchOrdersLoading;
export const selectCancelOrderLoading = state => state.order.cancelOrderLoading;

export default orderSlice.reducer;
