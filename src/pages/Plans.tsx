
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import { featuredFloorPlans, studioPlans, oneBedroomPlans, twoBedroomPlans } from '../data/plans';
import PlansHeader from '../components/plans/PlansHeader';
import PlansNavigation from '../components/plans/PlansNavigation';
import PlanTypeSection from '../components/plans/PlanTypeSection';
import CustomPlansSection from '../components/plans/CustomPlansSection';
import ScrollProgress from '../components/ScrollProgress';
import { motion } from 'framer-motion';

const Plans = () => {
  // State for section collapse/expand
  const [expandedSections, setExpandedSections] = useState({
    studio: true,
    oneBedroom: true,
    twoBedroom: true
  });

  const toggleSection = (section: 'studio' | 'oneBedroom' | 'twoBedroom') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // For parallax effect
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <div ref={heroRef} className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            transform: `translateY(${scrollY * 0.4}px)`,
            backgroundImage: "url('/lovable-uploads/d3cf4ce7-3f97-4189-96aa-90b3c9bd790d.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.9)'
          }}
        />
        <HeroSection 
          title="ADU PLANS & PRICING"
          subtitle="Explore our collection of ready-to-build ADU floor plans"
          backgroundImage="/lovable-uploads/d3cf4ce7-3f97-4189-96aa-90b3c9bd790d.png"
        />
      </div>

      <section className="py-16 md:py-24 bg-gradient-to-b from-alto-light-gray to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PlansHeader 
              title="Accessory Dwelling Unit Floor Plans"
              subtitle="Explore our collection of ready-to-build ADU floor plans below. Simply click on any plan to view detailed pricing and 3D virtual tours."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PlansNavigation />
          </motion.div>

          <PlanTypeSection 
            id="studio-plans"
            title="Studio Plans"
            plans={studioPlans}
            isExpanded={expandedSections.studio}
            onToggle={() => toggleSection('studio')}
          />

          <PlanTypeSection 
            id="one-bedroom-plans"
            title="One Bedroom Plans"
            plans={oneBedroomPlans}
            isExpanded={expandedSections.oneBedroom}
            onToggle={() => toggleSection('oneBedroom')}
          />

          <PlanTypeSection 
            id="two-bedroom-plans"
            title="Two Bedroom Plans"
            plans={twoBedroomPlans}
            isExpanded={expandedSections.twoBedroom}
            onToggle={() => toggleSection('twoBedroom')}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CustomPlansSection />
          </motion.div>
        </div>
      </section>

      <CallToActionSection 
        title="Find Your Perfect ADU Plan Today"
        subtitle="Let's discuss which plan best suits your property and lifestyle needs"
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Plans;
