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
      const product = {
        id: new Date(),
        title: action.payload.title,
        completed: false,
      };
      state.push(product);
    },
    updateCategoryProducts: (state, action: PayloadAction<UpdateCategoryPayload>) => {
        state.categories[action.payload.category] = action.payload.data;
    },
    updateSingleProduct: (state, action) => {},
  },
});

export const {
  updateProductList,
  updateSingleProduct,
  updateCategoryProducts
} = productSlice.actions;

export default productSlice.reducer;
