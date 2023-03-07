import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false, username: "" },
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = !state.isAuthenticated;
      state.username = action.payload;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
