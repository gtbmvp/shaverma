import { configureStore } from "@reduxjs/toolkit";

import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import product from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    product,
    filter,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
