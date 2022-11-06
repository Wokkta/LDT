import { createSlice } from "@reduxjs/toolkit";

export const areaSlice = createSlice({
  name: "area",
  initialState: { area: "all" },
  reducers: {
    setArea(state, action) {
      state.area = action.payload;
      console.log("inside reducer");
      console.log("area");
      console.log(state.area);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setArea } = areaSlice.actions;

export default areaSlice.reducer;
