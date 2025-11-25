import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Mobile Menu Icon (Hidden on Desktop) */}
          <div className="flex md:hidden items-center">
            <button className="text-gray-600 hover:text-black transition-colors">
              <Menu size={20} />
            </button>
          </div>

          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto absolute md:relative left-0 right-0 pointer-events-none md:pointer-events-auto">
             <span className="font-semibold text-lg tracking-tight">Lumina</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-xs font-medium text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Store</a>
            <a href="#" className="hover:text-black transition-colors">Mac</a> {/* Flavor text */}
            <a href="#" className="hover:text-black transition-colors">iPad</a> {/* Flavor text */}
            <a href="#clothing" className="hover:text-black transition-colors">Clothing</a>
            <a href="#shoes" className="hover:text-black transition-colors">Shoes</a>
            <a href="#accessories" className="hover:text-black transition-colors">Accessories</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-black transition-colors hidden sm:block">
              <Search size={18} />
            </button>
            <button 
              onClick={onOpenCart}
              className="text-gray-600 hover:text-black transition-colors relative"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;