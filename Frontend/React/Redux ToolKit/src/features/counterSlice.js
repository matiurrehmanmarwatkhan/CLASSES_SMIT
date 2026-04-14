import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (count) => {
      count.value += 3;
    },
    changeName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, changeName } = counterSlice.actions;
export default counterSlice.reducer;
