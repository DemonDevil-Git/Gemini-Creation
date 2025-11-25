import { Product, ProductCategory } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AirFlow Runner',
    tagline: 'Defy Gravity.',
    description: 'Engineered for the urban athlete. The AirFlow Runner combines our proprietary adaptive knit technology with a carbon-fiber plate for maximum energy return.',
    price: 189.00,
    category: ProductCategory.SHOES,
    image: 'https://picsum.photos/id/103/600/600',
    features: ['Adaptive Knit Upper', 'Carbon Fiber Plate', 'Water Resistant'],
    popularityData: [
      { day: 'Mon', views: 400 },
      { day: 'Tue', views: 300 },
      { day: 'Wed', views: 550 },
      { day: 'Thu', views: 450 },
      { day: 'Fri', views: 700 },
      { day: 'Sat', views: 900 },
      { day: 'Sun', views: 800 },
    ]
  },
  {
    id: '2',
    name: 'Metro Nomad Pack',
    tagline: 'Carry your world.',
    description: 'Minimalist exterior, maximalist interior. Designed for digital nomads who need to switch from boardroom to airport lounge in seconds.',
    price: 129.00,
    category: ProductCategory.ACCESSORIES,
    image: 'https://picsum.photos/id/366/600/600',
    features: ['16" Laptop Compartment', 'Waterproof Shell', 'Hidden Anti-Theft Pocket'],
    popularityData: [
      { day: 'Mon', views: 200 },
      { day: 'Tue', views: 250 },
      { day: 'Wed', views: 220 },
      { day: 'Thu', views: 300 },
      { day: 'Fri', views: 350 },
      { day: 'Sat', views: 400 },
      { day: 'Sun', views: 380 },
    ]
  },
  {
    id: '3',
    name: 'Merino Tech Tee',
    tagline: 'Soft. Cool. Advanced.',
    description: 'The shirt that works as hard as you do. 100% merino wool treated with our Nano-Cool coating for instant moisture wicking.',
    price: 65.00,
    category: ProductCategory.CLOTHING,
    image: 'https://picsum.photos/id/823/600/600', // Using generic placeholder
    features: ['Odor Resistant', 'Temperature Regulating', 'Wrinkle Free'],
    popularityData: [
      { day: 'Mon', views: 500 },
      { day: 'Tue', views: 480 },
      { day: 'Wed', views: 600 },
      { day: 'Thu', views: 550 },
      { day: 'Fri', views: 650 },
      { day: 'Sat', views: 700 },
      { day: 'Sun', views: 750 },
    ]
  },
   {
    id: '4',
    name: 'Stratus Windbreaker',
    tagline: 'Light as air.',
    description: 'Packable protection against the elements. Weighs less than your smartphone but blocks 99% of wind chill.',
    price: 145.00,
    category: ProductCategory.CLOTHING,
    image: 'https://picsum.photos/id/837/600/600',
    features: ['Packable to Pocket', 'Reflective Seams', 'Adjustable Hood'],
    popularityData: [
      { day: 'Mon', views: 300 },
      { day: 'Tue', views: 320 },
      { day: 'Wed', views: 400 },
      { day: 'Thu', views: 420 },
      { day: 'Fri', views: 500 },
      { day: 'Sat', views: 600 },
      { day: 'Sun', views: 550 },
    ]
  },
];
