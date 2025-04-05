
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToActionSection from '../../components/CallToActionSection';
import KitchenProjectDetail from '../../components/projects/KitchenProjectDetail';
import PageTransition from '../../components/PageTransition';

const KitchenProjectWestLA = () => {
  // Using the 5 white kitchen images provided for West LA
  const images = [
    "/lovable-uploads/710f9a5e-cc45-4a96-97ba-81f782a7d783.png",
    "/lovable-uploads/5126b630-7372-4a58-9266-fd6e718118df.png",
    "/lovable-uploads/94fc1121-02d7-4c84-9b59-3478af52bca7.png",
    "/lovable-uploads/c1d67c75-2052-49aa-8910-0bc223b2be05.png",
    "/lovable-uploads/acb35287-28e0-4a16-97d5-96f5543d6e78.png"
  ];

  return (
    <PageTransition>
      <Navbar />
      <HeroSection 
        title="Kitchen Project - West LA"
        subtitle="Modern kitchen renovation featuring premium materials and custom design"
        backgroundImage="/lovable-uploads/710f9a5e-cc45-4a96-97ba-81f782a7d783.png"
      />
      
      <KitchenProjectDetail 
        title="Kitchen Project - West LA"
        location="West LA, CA"
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

export default KitchenProjectWestLA;
