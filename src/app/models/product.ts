export interface Product {
  readonly id: number;
  title: string;
  category: string;
  description: string;
  images: Array<string>;
  variants: Array<object>;
  price: string;
  tags: Array<string>;
}
