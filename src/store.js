import { configureStore } from "@reduxjs/toolkit";
import markdownReducer, { change } from "./features/markdownSlice";
export default configureStore({
  reducer: {
    markdown: markdownReducer,
  },
});
