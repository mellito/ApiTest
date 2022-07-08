import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const getUsers = createAsyncThunk("user/getUsers", async () => {
  try {
    const payload = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(API_URL, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export default getUsers;
