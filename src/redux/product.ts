import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductSliceState, UpdateCategoryPayload } from "../interfaces/product.interface";

const initialState: IProductSliceState = {
  productsList: [],
  singleProduct: null,
  categories: {
    electronics: [],
    menWear: [],
    womenWear: [],
    jewelery: [],
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductList: (state: any, action) => {
      state.productsList = action.payload.data; 
    },
    updateCategoryProducts: (state, action: PayloadAction<UpdateCategoryPayload>) => {
        const categorie = action.payload.category;
        
        state.categories[categorie] = action.payload.data;        
    },
    updateSingleProduct: (state, action) => {
      
    },
  },
});

export const {
  updateProductList,
  updateSingleProduct,
  updateCategoryProducts
} = productSlice.actions;

export default productSlice.reducer;
