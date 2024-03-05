export type ApiResponse = {
  limit: number;
  products: products[];
  skip: number;
  total: number;
};

export type products = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
