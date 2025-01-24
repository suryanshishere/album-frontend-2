"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
  text: string;
  timestamp: string;
}

interface CommentsState {
  list: Comment[];
}

const initialState: CommentsState = {
  list: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<Comment[]>) {
      state.list = action.payload;
    },
    addComment(state, action: PayloadAction<Comment>) {
      state.list.push(action.payload);
    },
  },
});

export const { setComments, addComment } = commentsSlice.actions;

export default commentsSlice.reducer;
