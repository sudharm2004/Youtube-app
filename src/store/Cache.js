import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    storeCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { storeCache } = cacheSlice.actions;

export default cacheSlice.reducer;
