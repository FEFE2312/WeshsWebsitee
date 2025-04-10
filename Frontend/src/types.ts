export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  image: string;
  images: string[];
  category: string;
  brand: string;
  sizes: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  stock: number;
  tags: string[];
}

export interface Testimonial {
  id: string | number;
  name: string;
  image?: string;
  productImage?: string;
  rating: number;
  date: string;
  text: string;
}

export interface Subcategory {
  id: string;
  name: string;
  path: string;
  subcategories?: Subcategory[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories?: Subcategory[];
}