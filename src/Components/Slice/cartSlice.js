import { createSlice } from "@reduxjs/toolkit";
import { FoodItems } from "../../data/nav";
const initialState = {
  cart: [],
  items: FoodItems,
  totalItems: 0,
  totalPrice: 0,
  uniqueItem: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);

      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
        state.uniqueItem = state.uniqueItem + 1
      }
    },
    getCartTotal: (state, action) => {
      let { totalItems, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;

          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;

          cartTotal.totalItems += quantity;

          return cartTotal;
        },
        {
          totalPrice: 0,
          totalItems: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalItems = totalItems;
    },
    getDistinct: (state, action) => {
        // state.cart.forEach((data) =>{
        //     if()
        // })
    },
  },
});
export const { addToCart, getCartTotal, getDistinct } = cartSlice.actions;
export default cartSlice.reducer;
