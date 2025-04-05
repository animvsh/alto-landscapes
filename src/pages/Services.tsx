
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import ProcessSection from '../components/services/ProcessSection';
import WhyChooseUs from '../components/services/WhyChooseUs';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import ServiceCardsGrid from '../components/services/ServiceCardsGrid';
import AduPromoSection from '../components/services/AduPromoSection';
import DesignBuildApproach from '../components/services/DesignBuildApproach';
import TestimonialsSection from '../components/services/TestimonialsSection';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Navbar />
      <HeroSection 
        title="OUR SERVICES"
        subtitle="Comprehensive building solutions from concept to completion"
        backgroundImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <ScrollReveal animation="slide-up">
            <div className="text-center mb-12">
              <h2 className="section-title">Premium Construction Services</h2>
              <p className="section-subtitle mx-auto">
                From initial concept to final completion, we offer comprehensive building and remodeling services
              </p>
            </div>
          </ScrollReveal>
          
          <ServiceCardsGrid />
          <AduPromoSection />
        </div>
      </section>

      <DesignBuildApproach />
      <ProcessSection />
      <WhyChooseUs />
      <TestimonialsSection />

      <CallToActionSection 
        title="Ready to Start Your Project?"
        subtitle="Contact us today to schedule your free consultation"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <Footer />
    </PageTransition>
  );
};

export default Services;
