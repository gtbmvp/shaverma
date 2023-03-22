import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ICartShaverma } from "../../types";
import { RootState } from "..";

interface ICartState {
  items: Array<ICartShaverma>;
  totalPrice: number;
  totalCount: number;
}

interface IOrderProduct {
  id: number;
  count: number;
}

const initialState: ICartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ICartShaverma>) => {
      const { id } = action.payload;
      if (state.items[id] === null || state.items[id] === undefined) {
        state.items[id] = { ...action.payload, count: 1 };
        state.totalPrice += action.payload.price;
        state.totalCount++;
      } else {
        state.items[id].count++;
        state.totalPrice += action.payload.price;
        state.totalCount++;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      if (state.items[id].count > 0) {
        state.items[id].count--;
        state.totalPrice -= state.items[id].price;
        state.totalCount--;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});
const selectItems = (state: RootState) => state.cart.items;

export const selectCountAndIds = createSelector(selectItems, (items) =>
  items.reduce<IOrderProduct[]>((acc, item) => {
    if (!item) return acc;
    acc.push({ id: item.id, count: item.count });
    return acc;
  }, [])
);

export const { add, remove, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
