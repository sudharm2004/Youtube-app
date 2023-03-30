import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
  name: "show",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    toggleShowSidebar: (state, action) => {
      console.log(state);
      if (state.isSidebarOpen) {
        state.isSidebarOpen = false;
      } else {
        state.isSidebarOpen = true;
      }
    },
    hideSidebar: (state, action) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleShowSidebar, hideSidebar } = showSlice.actions;

export default showSlice.reducer;
