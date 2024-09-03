export interface IProductSliceState {
  productsList: Product[] | [];
  singleProduct: Product | null;
  categories: ICategory;
}

export interface ICategory {
  electronics: Product[] | [];
  menWear: Product[] | [];
  womenWear: Product[] | [];
  jewelery: Product[] | [];
}

export interface UpdateCategoryPayload {
  category: keyof ICategory;
  data: Product[];
}

export interface Product {
  id: Date;
  title: string;
  completed: boolean;
  quantity?: number;
}

export interface ICartItem {
  cartItems: Product[] ;
}

export interface Products {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface ProductsState {
  categories: {
    jewelery: Products[];
    electronics: Products[];
    menWear: Products[];
    womenWear: Products[];
  };
}

export interface RootState {
  products: ProductsState;
}