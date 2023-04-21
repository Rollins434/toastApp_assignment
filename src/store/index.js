import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Components/Slice/cartSlice";
export const store = configureStore({
  reducer: 
  {
    CART : cartReducer
  },
});