export enum ProductCategory {
  CLOTHING = 'Clothing',
  SHOES = 'Shoes',
  ACCESSORIES = 'Accessories'
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  features: string[];
  popularityData: { day: string; views: number }[]; // For Recharts
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export interface AiMessage {
  role: 'user' | 'model';
  text: string;
}
