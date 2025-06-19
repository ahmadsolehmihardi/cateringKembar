
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-2xl font-bold mb-4">
              <span className="text-yellow-400">Catering</span> Kembar
            </div>
            <p className="text-gray-400 mb-4">
              Creating unforgettable culinary experiences for over 25 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Wedding Catering</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Corporate Events</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Private Parties</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Cocktail Receptions</a></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#gallery" className="hover:text-yellow-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Culinary Street</p>
              <p>New York, NY 10001</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: contact@elitecatering.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ahmad S Mihardi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
