import { configureStore } from '@reduxjs/toolkit';
import productReducer from './redux/product';
import CartReducer from './redux/cart';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: CartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store