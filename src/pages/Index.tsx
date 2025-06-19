
import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import BrandSection from '../components/BrandSection';
import AboutSection from '../components/AboutSection';
import Gallery from '../components/Gallery';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/CTASection';
import CompanyIcons from '../components/CompanyIcons';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroCarousel />
      <BrandSection />
      <AboutSection />
      <Gallery />
      <TestimonialsCarousel />
      <ContactForm />
      <CTASection />
      <CompanyIcons />
      <Footer />
    </div>
  );
};

export default Index;
