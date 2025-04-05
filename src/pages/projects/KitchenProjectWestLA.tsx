
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToActionSection from '../../components/CallToActionSection';
import KitchenProjectDetail from '../../components/projects/KitchenProjectDetail';

const KitchenProjectWestLA = () => {
  const images = [
    "/lovable-uploads/0ca56178-11a4-40a9-88f9-0e6ec63e1994.png",
    "/lovable-uploads/0ce70111-c71a-4fe3-854c-8371c1d705be.png",
    "/lovable-uploads/12ed4d26-eaf7-47bd-a9c2-8f9a4a83d958.png",
    "/lovable-uploads/15387f04-3154-42ef-b673-a243a66904de.png",
    "/lovable-uploads/15a7ca53-0fbb-4a81-99d7-f06c95669a8f.png"
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="Kitchen Project - West LA"
        subtitle="Modern kitchen renovation featuring premium materials and custom design"
        backgroundImage="/lovable-uploads/0ca56178-11a4-40a9-88f9-0e6ec63e1994.png"
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
    </>
  );
};

export default KitchenProjectWestLA;
