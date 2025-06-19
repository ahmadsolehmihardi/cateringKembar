
import React from 'react';

const BrandSection = () => {
  const brands = [
    { name: 'Michelin', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Forbes', logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Zagat', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Food & Wine', logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Bon Appétit', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-white text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Trusted by Industry Leaders
          </h3>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
