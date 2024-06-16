// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "../Features/cartSlice";


// export const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
// });



import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Features/cartSlice';
import countReducer from '../Features/countSlice';
import { saveToLocalStorage, loadFromLocalStorage } from '../middleware/localStorage';

const preloadedState = {
  cart: loadFromLocalStorage(),
  // count: loadFromLocalStorage(),
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    count: countReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage),
});

