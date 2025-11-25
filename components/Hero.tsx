import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 text-center bg-apple-gray overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-sm md:text-base font-semibold text-orange-600 mb-2 uppercase tracking-wide">New Collection</h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-apple-dark mb-6">
          Designed for Motion.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
          The new Summer Series. Breathable. Sustainable. Effortless.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all text-sm md:text-base">
            Shop Collection
          </button>
          <button className="text-blue-600 hover:underline font-medium text-sm md:text-base flex items-center gap-1">
            Watch the film <span className="text-xs">↗</span>
          </button>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 -z-0 pointer-events-none" />
    </section>
  );
};

export default Hero;