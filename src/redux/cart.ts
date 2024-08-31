import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state: any, action) {

        },
        removeItem: (state, payload) {

        },
        updateItem: (state, payload) {

        },
        getCartItems: (state, payload) {
            
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;