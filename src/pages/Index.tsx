
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SplashScreen from "../components/SplashScreen";
import BackgroundVideo from "../components/BackgroundVideo";
import HomeServicesSection from "../components/HomeServicesSection";
import FeaturedProjectsSlider from "../components/FeaturedProjectsSlider";
import AboutSection from "../components/sections/AboutSection";
import ServiceAreaSection from "../components/sections/ServiceAreaSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/TestimonialSlider";

const HOMEPAGE_VIDEO_PLACEHOLDER =
  "https://player.vimeo.com/external/316139255.sd.mp4?s=b36f0c74e55b3f5c737118ce151b8c1ce96f2543&profile_id=164&oauth2_token_id=57447761";
// Optionally use an Unsplash fallback image as the poster.
const POSTER_PLACEHOLDER =
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&q=80";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Splash should show at least 1.1s for a premium feel
    const timer = setTimeout(() => setLoading(false), 1100);

    // Optionally preload video (simulate loading)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Splash loader */}
      <SplashScreen visible={loading} />

      {/* Video background */}
      <div className="fixed inset-0 z-0">
        <BackgroundVideo 
          videoUrl={HOMEPAGE_VIDEO_PLACEHOLDER}
          fallbackImage={POSTER_PLACEHOLDER}
        />
      </div>

      {/* Content overlays, rendered only after loading is done */}
      <div className={`relative z-10 transition-opacity duration-700 ${loading ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Navbar />

        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center min-h-[88vh] px-6 md:px-0 text-center select-none">
          <div className="max-w-3xl mt-40 mb-20 md:mt-44 md:mb-24 mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 animate-fadeInUp">
              Premium ADU & Remodeling Experts
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-8 animate-fadeInUp delay-200">
              Transform your living space with modern accessory dwelling units and beautifully tailored renovations—crafted for Greater Los Angeles & Ventura County.
            </p>
            <a 
              href="/contact"
              className="btn-accent px-8 py-3 rounded-full text-lg font-semibold shadow-xl transition hover:scale-105 inline-block animate-fadeInUp delay-300"
              style={{ background: "#8E9196" }}
            >
              Get Your Free Consultation
            </a>
          </div>
        </section>

        {/* Main Content */}
        <main className="relative">
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
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
