
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import DesignOptionsSection from '../components/design/DesignOptionsSection';
import FeaturedPlansSection from '../components/design/FeaturedPlansSection';
import DesignInfoBox from '../components/design/DesignInfoBox';
import DesignerInfoSection from '../components/design/DesignerInfoSection';
import DesignCtaBanner from '../components/design/DesignCtaBanner';
import { featuredFloorPlans } from '../data/plans';

const Design = () => {
  return (
    <>
      <Navbar />
      <HeroSection 
        title="ADU DESIGNS"
        subtitle="Choose an ADU design you'll love"
        backgroundImage="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Choose an ADU design you'll love</h2>
            <p className="section-subtitle mx-auto">
              Are you ready to bring your accessory dwelling unit design to life? At Alto Builders, we're here to guide you through the process of designing your perfect ADU. Our team of experts has curated an extensive selection of floor plans, interior design packages, and preferred home features to help you create a space that's both functional and stylish.
            </p>
            <p className="mt-4 text-alto-dark-gray max-w-4xl mx-auto">
              From selecting the right materials to understanding the ideal size for your ADU, we've got you covered. As a design build ADU contractor, we understand the importance of balancing design with budget and real-world buildability. Let us help you turn your vision into a reality with our experienced ADU design team.
            </p>
          </div>

          <DesignOptionsSection />

          <FeaturedPlansSection plans={featuredFloorPlans} />

          <DesignInfoBox />

          <DesignerInfoSection />
        </div>
      </section>

      <DesignCtaBanner />

      <CallToActionSection 
        title="Ready to Design Your Perfect ADU?"
        subtitle="Let's create a space that perfectly suits your needs and lifestyle"
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Design;
