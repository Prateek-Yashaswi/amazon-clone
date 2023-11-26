export interface Product {
  imgUrl: string;
  title: string;
}

export interface ProductDetails {
  paperHeading: string;
  products: Product[];
  linkText?: string;
}
