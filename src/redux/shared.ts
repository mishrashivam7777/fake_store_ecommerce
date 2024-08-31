import { createSlice } from "@reduxjs/toolkit";

export const sharedSlice = createSlice({
    name: 'cart',
    initialState: {
        loading: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setLoading } = sharedSlice.actions;

export default sharedSlice.reducer;