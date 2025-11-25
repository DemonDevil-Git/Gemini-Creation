import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const isDark = product.category === 'Shoes'; // Style variation

  return (
    <div 
      onClick={() => onClick(product)}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-[1.01] ${isDark ? 'bg-black text-white' : 'bg-white text-black border border-gray-100'}`}
      style={{ height: '500px' }}
    >
      <div className="absolute top-0 left-0 w-full p-8 z-10 text-center">
        <p className={`text-xs font-semibold mb-1 ${isDark ? 'text-gray-400' : 'text-orange-600'}`}>
          {product.category}
        </p>
        <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
        <p className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
          {product.tagline}
        </p>
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <span className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full">Buy</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-3/5 flex items-end justify-center pb-8 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full object-contain transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default ProductCard;