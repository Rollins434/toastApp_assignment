import { createSlice } from "@reduxjs/toolkit";
import { FoodItems } from "../../data/nav";
const initialState = {
  cart: [],
  items: FoodItems,
  totalItems: 0,
  totalPrice: 0,
  uniqueItem: 0,
  previousOrder :[],
  previousQty:0
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
    increaseItem : (state,action) =>{
        state.cart = state.cart.map((data) =>{
            if(data.id === action.payload){
                return {...data, quantity : data.quantity + 1}
            }
            return data
        })
    },
    decreaseItem : (state,action) =>{
        state.cart = state.cart.map((data) =>{
            if(data.id === action.payload){
                return {...data, quantity : data.quantity - 1}
            }
            return data
        })
    },
    getPreviousOrder : (state) =>{
   
      
        state.cart.forEach((data) => {
        state.previousOrder.push(data)
     
       })
       state.previousQty = state.totalItems;
       state.cart = []
       state.uniqueItem = 0
    }
  },
});
export const { addToCart, getCartTotal, getDistinct,increaseItem,decreaseItem,getPreviousOrder } = cartSlice.actions;
export default cartSlice.reducer;
