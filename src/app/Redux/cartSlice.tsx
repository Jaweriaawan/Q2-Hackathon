'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a cart item
export interface CartItem {
  id: string; // Ensure this matches the type of your product ID
  name: string;
  price: number;
  quantity: number;
}

// Define the initial state as an array of CartItem
const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    // Add a product to the cart
    add(state, action: PayloadAction<CartItem>) {
      state.push(action.payload);
    },

    // Remove a product from the cart by its ID
    remove(state, action: PayloadAction<string>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// Export actions and reducer
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;



// 'use client'
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "Cart",
//     initialState :[],
//     reducers: {
//         add(state , action){
//             state.push(action.payload)
//         },

//         remove(state , action){
//             return state.filter((item) => item.id !== action.payload);
//         }
//     }
// })

// export const {add , remove} = cartSlice.actions
// export default cartSlice.reducer;