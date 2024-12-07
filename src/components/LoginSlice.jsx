import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Nikhil",
};





const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    setlogin: (state,action) => {
      state.name=action.payload
    },
  },
});

export const { setlogin } = LoginSlice.actions;
export default LoginSlice.reducer;
