import {configureStore, } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';
import Slice from "./Slice";

const store = configureStore({
    
reducer:{

    Storeslice:Slice,
    cart: cartReducer
},
});
export default store;






