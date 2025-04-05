
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToActionSection from '../../components/CallToActionSection';
import KitchenProjectDetail from '../../components/projects/KitchenProjectDetail';

const KitchenProjectPasadena = () => {
  const images = [
    "/lovable-uploads/21fee34c-566e-4fdd-88fb-a78d3d3b74b7.png",
    "/lovable-uploads/2277e935-2f10-4733-8f62-c1f3ec58534f.png",
    "/lovable-uploads/27deba99-160c-44d5-9f53-b67e547a480d.png",
    "/lovable-uploads/286f7c19-752b-4cc4-90b0-4c14e2dea38e.png",
    "/lovable-uploads/2bb818e7-0d24-4461-8d11-65a03f17aa7e.png"
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="Kitchen Project - Pasadena"
        subtitle="Luxurious kitchen renovation featuring high-end materials and custom design"
        backgroundImage="/lovable-uploads/21fee34c-566e-4fdd-88fb-a78d3d3b74b7.png"
      />
      
      <KitchenProjectDetail 
        title="Kitchen Project - Pasadena"
        location="Pasadena, CA"
        images={images}
      />
      
      <CallToActionSection 
        title="Ready to Transform Your Kitchen?"
        subtitle="Contact us today to schedule your free consultation"
        buttonText="Get Started"
        buttonLink="/contact"
      />
      
      <Footer />
    </>
  );
};

export default KitchenProjectPasadena;
