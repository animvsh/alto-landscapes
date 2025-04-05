
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToActionSection from '../../components/CallToActionSection';
import KitchenProjectDetail from '../../components/projects/KitchenProjectDetail';
import PageTransition from '../../components/PageTransition';

const KitchenProjectPasadena = () => {
  // Using the 5 wooden cabinet kitchen images for Pasadena
  const images = [
    "/lovable-uploads/582129ba-ae8e-4b70-94ff-bd16281b02d0.png",
    "/lovable-uploads/569290b6-02a7-43ec-b6c2-fbca64d22845.png",
    "/lovable-uploads/2206905e-188a-4731-bd4f-7f3a6f79854d.png",
    "/lovable-uploads/e8e7c260-aa22-4db1-92d6-4b1180181083.png",
    "/lovable-uploads/a9f018d8-dc43-4cbf-8531-2e2ebfb5af32.png"
  ];

  return (
    <PageTransition>
      <Navbar />
      <HeroSection 
        title="Kitchen Project - Pasadena"
        subtitle="Luxurious kitchen renovation featuring high-end materials and custom design"
        backgroundImage="/lovable-uploads/582129ba-ae8e-4b70-94ff-bd16281b02d0.png"
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
    </PageTransition>
  );
};

export default KitchenProjectPasadena;
