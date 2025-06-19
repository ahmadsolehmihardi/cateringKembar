
import React from 'react';
import { Utensils } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Chef preparing food"
              className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Utensils className="text-yellow-400 w-8 h-8" />
              <span className="text-yellow-400 text-lg font-semibold">Tentang Katering Kembar</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Menciptakan Keunggulan Kuliner Sejak 2020
            </h2>
            
            <div className="space-y-4 text-gray-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <p className="text-lg leading-relaxed">
                Selama lebih dari 5 tahun, Catering Kembar telah menjadi pilihan utama bagi klien cerdas yang menginginkan yang terbaik dalam seni kuliner. Tim koki kelas dunia kami memadukan keahlian internasional dan cita rasa lokal untuk menciptakan pengalaman bersantap yang tak terlupakan.
              </p>
              
              <p className="text-lg leading-relaxed">
                Dari acara kumpul-kumpul yang intim hingga perayaan besar, kami bangga memberikan layanan yang sempurna, menu yang inovatif, dan penyajian yang melampaui ekspektasi. Setiap hidangan dibuat dengan penuh semangat, ketelitian, dan bahan-bahan terbaik yang bersumber dari mitra tepercaya.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6 animate-fade-in" style={{ animationDelay: '1.0s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
                <div className="text-gray-400">Events Catered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
