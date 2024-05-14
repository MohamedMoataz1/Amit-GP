import { configureStore } from "@reduxjs/toolkit";
import { cartslise } from './cartSlice';

export const cartproducts = configureStore({
    reducer : {
        cart : cartslise.reducer
    }
})