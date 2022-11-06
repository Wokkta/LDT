import { createSlice } from "@reduxjs/toolkit";

export const rangeSlice = createSlice({
  name: "range",
  initialState: { range: [0, 0] },
  reducers: {
    setRange(state, action) {
      state.range = action.payload;
      console.log("inside reducer");
      console.log("range");
      console.log(state.range);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRange } = rangeSlice.actions;

export default rangeSlice.reducer;
