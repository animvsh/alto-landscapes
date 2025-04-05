
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import ServicesList from '../components/services/ServicesList';
import ProcessSection from '../components/services/ProcessSection';
import WhyChooseUs from '../components/services/WhyChooseUs';
import PageTransition from '../components/PageTransition';

const Services = () => {
  return (
    <PageTransition>
      <Navbar />
      <HeroSection 
        title="OUR SERVICES"
        subtitle="Comprehensive building solutions from concept to completion"
        backgroundImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1920&q=80"
      />

      <ServicesList />
      <ProcessSection />
      <WhyChooseUs />

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
