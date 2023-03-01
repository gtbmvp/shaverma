import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IShaverma } from "../../types";

interface ICartState {
  items: Array<Array<IShaverma>>;
}

const initialState: ICartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IShaverma>) => {
      const { id } = action.payload;
      if (state.items[id] === undefined) {
        state.items[id] = Array(action.payload);
      } else {
        state.items[id].push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      for (let i = 0; i < state.items[id]?.length; i++) {
        state.items[id].splice(i, 1);
        break;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
