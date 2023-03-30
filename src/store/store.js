import { configureStore } from "@reduxjs/toolkit";
import showSlice from "./show";
import cacheSlice from "./Cache";
import commentsSlice from "./Comments";

const store = configureStore({
  reducer: {
    show: showSlice,
    cache: cacheSlice,
    comments: commentsSlice,
  },
});

export default store;
