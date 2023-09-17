import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      const newItem = {
        ...action.payload,
        id: Math.random().toString(36).substr(2, 9), // This will generate a random id
      };
      state.push(newItem);
    },
    deleteFromCart: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
    clear: (state, action) => {},
  },
});

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;

export default cartSlice.reducer;
