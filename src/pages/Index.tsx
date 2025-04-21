import HomeHeader from "../components/HomeHeader";
import HomeServicesSection from "../components/HomeServicesSection";
import FeaturedProjectsSlider from "../components/FeaturedProjectsSlider";
import AboutSection from "../components/sections/AboutSection";
import ServiceAreaSection from "../components/sections/ServiceAreaSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/TestimonialSlider";

const Index = () => {
  return (
    <>
      <HomeHeader />
      <main>
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
    </>
  );
};

export default Index;
