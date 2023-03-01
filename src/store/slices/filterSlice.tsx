import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { SortType, CategoriesType } from "../../types";

interface IFilterState {
  filterBy: CategoriesType;
  sorting: SortType;
  search: string;
}

const initialState: IFilterState = {
  filterBy: "все",
  sorting: "rating",
  search: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<CategoriesType>) => {
      state.filterBy = action.payload;
    },
    changeSorting: (state, action: PayloadAction<SortType>) => {
      state.sorting = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { changeFilter, changeSorting, setSearch } = filterSlice.actions;

export default filterSlice.reducer;
