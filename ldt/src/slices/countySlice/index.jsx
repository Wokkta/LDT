import { createSlice } from "@reduxjs/toolkit";

export const countySlice = createSlice({
  name: "county",
  initialState: { county: "all" },
  reducers: {
    setCounty(state, action) {
      state.county = action.payload;
      console.log("inside reducer");
      console.log("county");
      console.log(state.county);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCounty } = countySlice.actions;

export default countySlice.reducer;
