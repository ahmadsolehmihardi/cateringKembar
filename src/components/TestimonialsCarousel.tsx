
import React, { useState, useEffect } from 'react';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Wedding Client',
      content: 'Elite Catering made our wedding day absolutely perfect. The attention to detail and exquisite flavors left our guests raving for weeks!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Event Manager',
      content: 'Professional, reliable, and absolutely delicious. They have been our go-to catering service for all major corporate events.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Birthday Party Host',
      content: 'The team went above and beyond to create a memorable experience. Every dish was a masterpiece, and the service was impeccable.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Apa Kata Klien Kami
          </h2>
          <p className="text-xl text-gray-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Pengalaman nyata dari kepuasan pelanggan 
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-900 rounded-lg p-8 text-center shadow-2xl">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                    />
                    <blockquote className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <div className="text-yellow-400 font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-yellow-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
