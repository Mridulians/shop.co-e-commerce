import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique IDs

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      // Assign a unique ID to each item
      state.push({ ...action.payload, uniqueId: uuidv4() });
    },
    remove(state, action) {
      // Use uniqueId to remove the specific item
      return state.filter((item) => item.uniqueId !== action.payload);
    },
    // eslint-disable-next-line no-unused-vars
    reset(state) {
      return initialState;
    },
  },
});

export const { add, remove, reset } = cartSlice.actions;
export default cartSlice.reducer;
