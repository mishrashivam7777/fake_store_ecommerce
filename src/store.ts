import { configureStore } from '@reduxjs/toolkit';
import productReducer from './redux/product';
import cartReducer from './redux/cart';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cartItems: cartReducer 
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
