import { createSlice } from "@reduxjs/toolkit";

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    text: "isus223",
  },
  reducers: {
    change: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { change } = markdownSlice.actions;
export const selectText = (state) => state.markdown.text;
export default markdownSlice.reducer;
