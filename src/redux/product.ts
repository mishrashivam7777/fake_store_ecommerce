import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        productsList: [],
        singleProduct: null,
        categories: {
            electronics: [],
            menWear: [],
            womenWear: [],
            jewellery: []
        }
    },
    reducers: {
        updateProductList: (state: any, action) => {
            const product = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };
            state.push(product);
        },
        updateElectronicProducts: (state, action) => {

        },
        updateMenWear: (state, action) {

        },
        updateWomenWear: (state, action) => {

        },
        updateJewelleryProducts: (state, action) => {

        },
        updateSingleProduct: (state, action) => {
            
        }
    },
});


export const { updateProductList } = productSlice.actions;

export default productSlice.reducer;