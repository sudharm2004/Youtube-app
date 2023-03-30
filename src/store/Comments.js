import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    liveComments: [],
  },
  reducers: {
    addComment: (state, action) => {
      //   console.log(action.payload);
      //   state.liveComments.forEach((element) => {
      //     console.log(element);
      //   });
      // state.liveComments.splice(25, 1);
      if (state.liveComments.length === 55) {
        state.liveComments.pop();
        state.liveComments.unshift(action.payload);
      } else {
        state.liveComments.unshift(action.payload);
      }
    },
  },
});

export const { addComment } = commentsSlice.actions;

export default commentsSlice.reducer;
