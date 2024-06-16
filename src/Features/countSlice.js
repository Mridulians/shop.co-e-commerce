// // src/Features/countSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// export const countSlice = createSlice({
//   name: 'count',
//   initialState: 1,
//   reducers: {
//     setCount: (state, action) => action.payload,
//     incrementCount: (state) => state + 1,
//     decrementCount: (state) => (state > 1 ? state - 1 : 1),
//   },
// });

// export const { setCount, incrementCount, decrementCount } = countSlice.actions;
// export default countSlice.reducer;




import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setCount: (state, action) => {
      const { id, count } = action.payload;
      state[id] = count;
    },
    incrementCount: (state, action) => {
      const id = action.payload;
      if (state[id] !== undefined) {
        state[id] += 1;
      } else {
        state[id] = 1;
      }
    },
    decrementCount: (state, action) => {
      const id = action.payload;
      if (state[id] && state[id] > 1) {
        state[id] -= 1;
      }
    },
  },
});

export const { setCount, incrementCount, decrementCount } = countSlice.actions;
export default countSlice.reducer;

