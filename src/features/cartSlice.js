// import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const tempCart = [...state.cart];
      const index = tempCart.findIndex(item => item.id == action.payload.id);

      if (index > -1) {
        const item = tempCart[index];
        item.quantity += action.payload.quantity;
        tempCart[index] = item;
      } else {
        tempCart.push(action.payload);
      }
      state.cart = tempCart;
    },
    removeFromCart: (state, action) => {
      const tempCart = state.cart;
      const index = tempCart.findIndex(item => item.id == action.payload.id);
      if (index > -1) {
        tempCart.splice(index, 1);
      }
      state.cart = tempCart;
    },
    subtractFromCart: (state, action) => {
      const tempCart = state.cart;
      const index = tempCart.findIndex(item => item.id == action.payload.id);
      if (index > -1) {
        const item = tempCart[index];
        const quantity = action.payload.quantity;
        item.quantity = quantity >= 0.5 ? item.quantity - quantity : 0.5;
        tempCart[index] = item;
      }
      state.cart = tempCart;
    },
    emptyCart: state => {
      state.cart = [];
    },
  },
});

export const {addToCart, removeFromCart, subtractFromCart, emptyCart} =
  cartSlice.actions;

export const selectCart = state => state.cart.cart;

export default cartSlice.reducer;
