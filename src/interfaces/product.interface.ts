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
}
