// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "../Features/cartSlice";


// export const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
// });



import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Features/cartSlice';
import { saveToLocalStorage, loadFromLocalStorage } from '../middleware/localStorage';

const preloadedState = {
  cart: loadFromLocalStorage(),
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage),
});

