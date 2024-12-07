import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
      state.count += 1;
    },
    removeItemFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
        state.count -= 1;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
