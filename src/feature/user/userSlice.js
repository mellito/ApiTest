/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import getUsers from "../../services/users";

const initialState = {
  user: [],
  isLoading: false,
  id: null,
  searchValue: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getId(state, action) {
      state.id = action.payload;
    },
    searchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
      state.user = [];
    },
    [getUsers.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [getUsers.rejected]: (state) => {
      state.user = [];
      state.isLoading = false;
    },
  },
});

export const { getId, searchValue } = userSlice.actions;
export default userSlice.reducer;
