import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  const userData = localStorage.getItem("user");
  if (userData) {
    const { user, token } = JSON.parse(userData);
    return { user, token, isAuth: true };
  }
  return { user: {}, token: "", isAuth: false };
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState(),
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      localStorage.setItem("user", JSON.stringify({ user, token }));
      return { user, token, isAuth: true };
    },
    logout: () => {
      localStorage.removeItem("user");
      return initialState();
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
