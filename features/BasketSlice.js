import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    countItem: (state, action) => {
      state.count += 1;
    },
    addToBasket: (state, action) => {
      state.items = action.payload;
    },
    removeFromBasket: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { addToBasket, removeFromBasket, countItem } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;

export default basketSlice.reducer;
