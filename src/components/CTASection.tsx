
import React from 'react';
import { Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Calendar className="w-16 h-16 text-black mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }} />
          
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Siap Memesan?
          </h2>
          
          <p className="text-xl md:text-2xl text-black/80 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Jangan tunda lagi untuk mengamankan tanggal Anda. Hubungi kami hari ini untuk mulai merencanakan pengalaman kuliner Anda yang luar biasa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Get Quote Now
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
