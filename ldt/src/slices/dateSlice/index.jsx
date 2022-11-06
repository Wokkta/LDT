import { createSlice } from "@reduxjs/toolkit";

export const dateSlice = createSlice({
  name: "date",
  initialState: { date: "all" },
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
      console.log("inside reducer");
      console.log("date");
      console.log(state.date);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDate } = dateSlice.actions;

export default dateSlice.reducer;
