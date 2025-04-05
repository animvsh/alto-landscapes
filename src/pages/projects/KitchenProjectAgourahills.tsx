
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToActionSection from '../../components/CallToActionSection';
import KitchenProjectDetail from '../../components/projects/KitchenProjectDetail';

const KitchenProjectAgourahills = () => {
  const images = [
    "/lovable-uploads/17929c0c-4021-439b-9cf2-e0dedb676b79.png",
    "/lovable-uploads/18785187-527a-42a6-86c7-5b163b1ad60b.png",
    "/lovable-uploads/1e9679c4-31cb-4e6c-ba9d-e19ed0371537.png",
    "/lovable-uploads/20445a80-7d0c-4d5b-b816-22dd735d5054.png",
    "/lovable-uploads/21faa8b0-bc6e-447d-9c61-62a55e9406bb.png"
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="Kitchen Project - Agoura Hills"
        subtitle="Elegant kitchen remodel with custom cabinetry and premium finishes"
        backgroundImage="/lovable-uploads/17929c0c-4021-439b-9cf2-e0dedb676b79.png"
      />
      
      <KitchenProjectDetail 
        title="Kitchen Project - Agoura Hills"
        location="Agoura Hills, CA"
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

export default KitchenProjectAgourahills;
