import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterValue: "",
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterChange: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
