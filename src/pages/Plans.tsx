
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import { featuredFloorPlans, studioPlans, oneBedroomPlans, twoBedroomPlans } from '../data/plans';
import PlansHeader from '../components/plans/PlansHeader';
import PlansNavigation from '../components/plans/PlansNavigation';
import PlanTypeSection from '../components/plans/PlanTypeSection';
import CustomPlansSection from '../components/plans/CustomPlansSection';

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

  return (
    <>
      <Navbar />
      <HeroSection 
        title="ADU PLANS & PRICING"
        subtitle="Explore our collection of ready-to-build ADU floor plans"
        backgroundImage="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 md:py-20 bg-alto-light-gray">
        <div className="container-custom">
          <PlansHeader 
            title="Accessory Dwelling Unit Floor Plans"
            subtitle="Explore our collection of ready-to-build ADU floor plans below. Simply click on any plan to view detailed pricing."
          />

          <PlansNavigation />

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

          <CustomPlansSection />
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
