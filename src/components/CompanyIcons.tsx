
import React from 'react';

const CompanyIcons = () => {
  const companies = [
    { name: 'Marriott', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Hilton', logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Ritz Carlton', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Four Seasons', logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'Waldorf Astoria', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'St. Regis', logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' }
  ];

  return (
    <section className="py-16 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-white text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Trusted Partners & Venues
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="flex items-center justify-center w-full h-20 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-40 hover:opacity-70 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyIcons;
