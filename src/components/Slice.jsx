import { createSlice } from "@reduxjs/toolkit";
import data from "../../hero.json";

const initialState = {
  json: data,
};
const section = createSlice({
  
  name: "Storeslice",
  initialState,
  reducers: {
    setjson: (state, action) => {
      state.json.header = action.payload;
    },

    setjson2: (state, action) => {
      state.json.movies = action.payload;
    },

    setjson3: (state, action) => {
      state.json.slides = action.payload;
    },

    setjson4:(state, action) =>{
        state.json.slides2 = action.payload
    },
    setjson5:(state,action) =>{
      state.json.slide3 = action.payload
    },

    setjson6:(state,action) =>{
      state.json.registration = action.payload
    },
    
  },
});
export const { setjson, setjson2, setjson3, setjson4,setjson5,setjson6 } = section.actions;
export default section.reducer;
