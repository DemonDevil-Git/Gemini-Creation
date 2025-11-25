import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Shop and Learn</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Store</a></li>
              <li><a href="#" className="hover:underline">Clothing</a></li>
              <li><a href="#" className="hover:underline">Shoes</a></li>
              <li><a href="#" className="hover:underline">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Account</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Manage Your ID</a></li>
              <li><a href="#" className="hover:underline">Store Account</a></li>
              <li><a href="#" className="hover:underline">iCloud.com</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-semibold text-gray-900 mb-3">Lumina Store</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Find a Store</a></li>
              <li><a href="#" className="hover:underline">Genius Bar</a></li>
              <li><a href="#" className="hover:underline">Today at Lumina</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">About Lumina</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Career Opportunities</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Ethics & Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0">Copyright © 2024 Lumina Apparel Inc. All rights reserved.</p>
          <div className="flex space-x-4">
             <a href="#" className="hover:underline">Privacy Policy</a>
             <span className="border-l border-gray-300"></span>
             <a href="#" className="hover:underline">Terms of Use</a>
             <span className="border-l border-gray-300"></span>
             <a href="#" className="hover:underline">Sales and Refunds</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;