import { createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../interfaces/product.interface";

const initialState: ICartItem = {
    cartItems: JSON.parse(localStorage.getItem('cart')) ?? [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateItemQuantity(state, action: any) {
        if(action.payload.quantity === 0){
            state.cartItems = state.cartItems.filter( item => item.id !== action.payload.id)
        } else{
            state.cartItems = state.cartItems.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: action.payload.quantity }
                : item
            );
        }
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeItem(state, action: any){
        state.cartItems = state.cartItems.filter( item => item.id !== action.payload)
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    addItem(state, action: any) {
        console.log('action: ', action.payload);
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);
  
        if (existingItem) {
          state.cartItems = state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          state.cartItems.push({ ...action.payload, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      },

    
  },
});

export const {
    updateItemQuantity,
    removeItem,
    addItem,
} = cartSlice.actions;

export default cartSlice.reducer;
