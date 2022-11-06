import { createSlice } from "@reduxjs/toolkit";

export const areaSlice = createSlice({
  name: "area",
  initialState: { area: "all" },
  reducers: {
    setArea(state, action) {
      state.area = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setArea } = areaSlice.actions;

export default areaSlice.reducer;
