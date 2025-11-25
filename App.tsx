import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const addToCart = (product: Product, size: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: size }];
    });
    setIsModalOpen(false);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-blue-200 selection:text-blue-900">
      <Header 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <main>
        <Hero />
        
        <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12 text-left md:text-center">
             <h2 className="text-4xl font-bold mb-4">The Latest.</h2>
             <p className="text-xl text-gray-500">Take a look at what's new this season.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={handleProductClick} 
              />
            ))}
          </div>
        </section>

        {/* Categories / Grid Layout Filler */}
        <section className="bg-gray-50 py-20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">Lumina Accessories.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                 {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-3xl p-8 h-80 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                       <h3 className="text-xl font-bold text-gray-900">Collection {i}</h3>
                       <p className="text-gray-500">Coming soon.</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>
      </main>

      <Footer />

      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onAddToCart={addToCart}
      />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
};

export default App;