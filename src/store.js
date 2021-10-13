import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import cartReducer from './features/cartSlice';
import errorReducer from './features/errorSlice';
import prodcutReducer from './features/productsSlice';
import addressReducer from './features/addressSlice';
import orderReducer from './features/orderSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    error: errorReducer,
    products: prodcutReducer,
    address: addressReducer,
    order: orderReducer,
  },
});
