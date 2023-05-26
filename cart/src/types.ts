export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export interface CartItems extends Product {
  quantity: number;
}
