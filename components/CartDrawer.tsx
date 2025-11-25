import React from 'react';
import { X, Trash2, CreditCard } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string, size: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className={`fixed inset-0 z-[70] pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold">Shopping Bag ({cartItems.length})</h2>
          <button onClick={onClose} className="p-2 bg-gray-50 rounded-full hover:bg-gray-100">
            <X size={20} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg">Your bag is empty.</p>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={`${item.id}-${item.selectedSize}-${idx}`} className="flex gap-4">
                <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img src={item.image} alt={item.name} className="h-16 w-16 object-contain" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.category} - Size {item.selectedSize}</p>
                    </div>
                    <p className="font-medium">${item.price}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                     <span className="text-sm text-gray-500">Qty {item.quantity}</span>
                     <button 
                       onClick={() => onRemoveItem(item.id, item.selectedSize)}
                       className="text-red-500 hover:text-red-600"
                     >
                       <Trash2 size={16} />
                     </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-black pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3">
               <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                 Check Out
               </button>
               <div className="flex gap-2">
                 <button className="flex-1 bg-[#0070BA] text-white py-3 rounded-xl font-bold text-xs hover:opacity-90 transition-opacity">
                    PayPal
                 </button>
                 <button className="flex-1 bg-[#1677FF] text-white py-3 rounded-xl font-bold text-xs hover:opacity-90 transition-opacity">
                    Alipay
                 </button>
                 <button className="flex-1 bg-[#1A1F71] text-white py-3 rounded-xl font-bold text-xs hover:opacity-90 transition-opacity">
                    Visa
                 </button>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;