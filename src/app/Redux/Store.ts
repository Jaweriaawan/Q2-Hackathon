'use client';

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cartSlice"

// Configure the Redux store
const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;




// 'use client'

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "@/app/Redux/Cartslice"

// const Store = configureStore({
//     reducer: {
//         cart:cartReducer
//     }
// })

// export default Store