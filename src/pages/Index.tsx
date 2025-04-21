
import React, { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import HomeServicesSection from "../components/HomeServicesSection";
import FeaturedProjectsSlider from "../components/FeaturedProjectsSlider";
import AboutSection from "../components/sections/AboutSection";
import ServiceAreaSection from "../components/sections/ServiceAreaSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/TestimonialSlider";
import SplashScreen from "../components/SplashScreen";

// Remove previous videoUrl, we'll use the provided embed below

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* --- Video Background: Always behind everything --- */}
        <div className="fixed inset-0 -z-20 w-full h-full pointer-events-none">
          <iframe
            width="1280"
            height="720"
            style={{
              border: 0,
              width: "100vw",
              height: "100vh",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: -20,
              objectFit: "cover",
              pointerEvents: "none"
            }}
            scrolling="no"
            src="https://go.screenpal.com/player/cTfr6VnjGGH?title=0&controls=1&a=1&share=1&download=1&embed=1&cl=1&width=1280&height=720&overlays=1&ff=1"
            allowFullScreen
          ></iframe>
          {/* Subtle overlays for blend and readability, can adjust as you like */}
          <div className="absolute inset-0 bg-black/65 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 pointer-events-none" />
        </div>
        {/* Always keep the header/nav/logo above video */}
        <HomeHeader />
        <main className="relative z-20 flex-1 w-full">
          <div className="backdrop-blur-[2px] bg-white/50 dark:bg-black/15 min-h-full">
            <HomeServicesSection />
            <FeaturedProjectsSlider />
            <TestimonialSlider />
            <AboutSection />
            <ServiceAreaSection />
            <TestimonialsSection />
            <CallToActionSection
              title="Ready to Start Your Project?"
              subtitle="Schedule a free consultation with our team to discuss your project"
              buttonText="Get Your Free Site Assessment"
              buttonLink="/contact"
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
