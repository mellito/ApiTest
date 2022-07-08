import { createSlice } from "@reduxjs/toolkit";
import getUsers from "../../services/users";

const initialState = {
  user: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      const newState = { ...state };
      newState.isLoading = true;
      newState.user = [];
      return newState;
    },
    [getUsers.fulfilled]: (state, action) => {
      const newState = { ...state };
      newState.user = action.payload.data;
      newState.isLoading = false;
      return newState;
    },
    [getUsers.rejected]: (state) => {
      const newState = { ...state };
      newState.user = [];
      newState.isLoading = false;
      return newState;
    },
  },
});

export default userSlice.reducer;
