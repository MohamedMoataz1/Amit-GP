import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const cartState = {
    cart: [] , 
    total : 0 , 
    items : 0 
}

export const cartslise = createSlice({
    name: "cart",
    initialState: cartState,
    reducers: {
        addtocart: (state, action) => {
            var isadded = false;
            state.cart.map((el) => {
                var cart = JSON.parse(JSON.stringify(el));
                var addedCart = action.payload.id;
                if (cart.id == addedCart) {
                    isadded = true;
                }

            })
           
            if (isadded == false) {

                state.cart.push(action.payload);
                state.total+=action.payload.pprice;
                state.items+=1;
            }
            
           
            
        }
    }
})