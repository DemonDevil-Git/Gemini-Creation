import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CreditCard, ShoppingBag } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Product, AiMessage } from '../types';
import { getStylingAdvice } from '../services/geminiService';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<AiMessage[]>([]);
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset chat when opening new product
      setMessages([{ role: 'model', text: `Hello! I'm your styling assistant. Ask me anything about the ${product?.name}.` }]);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    
    const userMsg = chatInput;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setIsLoadingAi(true);

    const reply = await getStylingAdvice(product, userMsg);
    
    setIsLoadingAi(false);
    setMessages(prev => [...prev, { role: 'model', text: reply }]);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="bg-white w-full max-w-6xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row animate-slide-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Left: Image */}
        <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8 md:p-16 h-1/3 md:h-full relative overflow-hidden">
             <img 
               src={product.image} 
               alt={product.name}
               className="max-h-full max-w-full object-contain drop-shadow-2xl" 
             />
             <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur px-4 py-2 rounded-xl text-xs font-mono text-gray-500">
               {product.category} COLLECTION
             </div>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 flex flex-col h-2/3 md:h-full overflow-y-auto no-scrollbar">
          <div className="p-8 md:p-12 flex-grow">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h2>
            <p className="text-xl text-gray-500 font-medium mb-6">${product.price.toFixed(2)}</p>

            {/* Sizes */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-3">Select Size</label>
              <div className="flex gap-3">
                {SIZES.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                      selectedSize === size 
                        ? 'bg-black text-white scale-110' 
                        : 'bg-white border border-gray-200 text-gray-900 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 prose prose-sm text-gray-600">
              <p>{product.description}</p>
              <ul className="mt-4 space-y-2 list-none pl-0">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trending Chart (Recharts) */}
            <div className="mb-10 p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                 <h3 className="text-sm font-semibold text-gray-900">Interest over time</h3>
                 <span className="text-xs text-green-600 font-medium bg-green-100 px-2 py-1 rounded-md">+24% this week</span>
              </div>
              <div className="h-32 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={product.popularityData}>
                    <defs>
                      <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0066cc" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#0066cc" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" hide />
                    <YAxis hide />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Area type="monotone" dataKey="views" stroke="#0066cc" strokeWidth={2} fillOpacity={1} fill="url(#colorViews)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* AI Stylist Section */}
            <div className={`mb-8 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${aiChatOpen ? 'bg-white shadow-lg ring-2 ring-blue-100' : 'bg-gray-50 hover:bg-gray-100'}`}>
              <button 
                onClick={() => setAiChatOpen(!aiChatOpen)}
                className="w-full flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg text-white">
                    <Sparkles size={18} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-sm">Ask the AI Stylist</p>
                    <p className="text-xs text-gray-500">Get advice on fit & fashion</p>
                  </div>
                </div>
                <span className="text-2xl text-gray-400">{aiChatOpen ? '−' : '+'}</span>
              </button>
              
              {aiChatOpen && (
                <div className="p-4 border-t border-gray-100 bg-white">
                  <div className="h-48 overflow-y-auto mb-3 space-y-3 no-scrollbar flex flex-col">
                    {messages.map((m, i) => (
                      <div key={i} className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                        m.role === 'user' 
                        ? 'bg-blue-600 text-white self-end rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 self-start rounded-bl-none'
                      }`}>
                        {m.text}
                      </div>
                    ))}
                    {isLoadingAi && (
                       <div className="self-start text-xs text-gray-400 pl-2 animate-pulse">Thinking...</div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="e.g., What shoes go with this?"
                      className="flex-grow bg-gray-50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <button 
                      onClick={handleSendMessage}
                      disabled={isLoadingAi}
                      className="bg-gray-900 text-white p-2 rounded-full disabled:opacity-50"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sticky Bottom Action Bar */}
          <div className="sticky bottom-0 bg-white/80 backdrop-blur-xl border-t border-gray-200 p-6 flex items-center gap-4">
             <div className="flex-grow hidden sm:block">
                <p className="text-xs text-gray-500">Free delivery and returns</p>
                <div className="flex gap-2 mt-1 opacity-50">
                    {/* Payment Icons Simulation */}
                    <div className="text-[10px] font-bold border rounded px-1">VISA</div>
                    <div className="text-[10px] font-bold border rounded px-1">PayPal</div>
                    <div className="text-[10px] font-bold border rounded px-1">Alipay</div>
                </div>
             </div>
             <button 
               onClick={() => onAddToCart(product, selectedSize)}
               className="flex-grow sm:flex-grow-0 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
             >
               Add to Bag <ShoppingBag size={18} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;