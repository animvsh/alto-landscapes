
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

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [videoKey, setVideoKey] = useState(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      // Reload the video when splash screen disappears to ensure autoplay
      setVideoKey(Date.now());
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Video Background */}
        <div className="fixed inset-0 -z-10 w-full h-full bg-black/90">
          {/* Full-viewport, always-fill iframe embed cropped to cover */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
              key={videoKey}
              src="https://go.screenpal.com/player/cTfr60njGdL?title=0&controls=0&a=1&share=0&download=0&embed=1&cl=1&width=1920&height=1080&overlays=0&ff=1&autoplay=1&muted=1&loop=1&play=1&pause=0&playsinline=1&is_background=1"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Background video"
              className="iframe-bg-cover"
              style={{
                border: "none",
                pointerEvents: "none",
                background: "#000",
                opacity: 0.9,
              }}
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 pointer-events-none" />
        </div>
        {/* Always keep the header/nav/logo above video */}
        <HomeHeader />
        <main className="relative z-20 flex-1 w-full">
          <div className="backdrop-blur-[1.5px] bg-white/50 dark:bg-black/15 min-h-full">
            {/* Home hero content, sections etc */}
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
