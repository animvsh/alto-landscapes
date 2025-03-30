
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CallToActionSection from '../components/CallToActionSection';
import PlanDetailBanner from '../components/PlanDetailBanner';
import PlanGallery from '../components/PlanGallery';
import { ArrowLeft, Check, Home, Bed, Bath, Square, Map, ArrowRight } from 'lucide-react';
import { featuredFloorPlans } from '../data/plans';
import ScrollProgress from '../components/ScrollProgress';
import { motion } from 'framer-motion';

const PlanDetail = () => {
  const { planId } = useParams<{ planId: string }>();
  const [scrollY, setScrollY] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [planImages, setPlanImages] = useState<string[]>([]);
  
  // Find the plan in the data
  const plan = featuredFloorPlans.find(p => 
    p.name.toLowerCase().replace(/\s+/g, '-') === planId
  );
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to top when plan changes
    window.scrollTo(0, 0);
    
    // Set up images
    if (plan) {
      const images = [];
      
      // Add main images
      if (plan.floorPlanImage) {
        images.push(plan.floorPlanImage);
      }
      
      if (plan.image && plan.image !== plan.floorPlanImage) {
        images.push(plan.image);
      }
      
      // For Whistler plan (first 6 images)
      if (plan.name === "The Whistler Plan") {
        images.push(
          "/lovable-uploads/317d251a-25e4-401a-8f49-b4f6b1b4c652.png",
          "/lovable-uploads/3239c54c-900f-4f2c-9791-1d9d649fa09e.png",
          "/lovable-uploads/8a65a5ed-85f9-434b-bb53-bdf791579518.png",
          "/lovable-uploads/e2aef1a4-72c3-4e6d-932f-5750f79bc8c0.png",
          "/lovable-uploads/501c6bf5-0b73-4571-b2c7-e1d778dfd8b3.png",
          "/lovable-uploads/410ec3a3-1ef1-4fbf-bf8e-1abeb528c46c.png"
        );
      }
      
      // For Spruce plan (next 5 images)
      if (plan.name === "The Spruce Plan") {
        images.push(
          "/lovable-uploads/f9b428c1-3ef4-4d46-87ba-368a64a9ba47.png",
          "/lovable-uploads/87aa8cc7-0176-4780-927b-2fe210f9535d.png",
          "/lovable-uploads/15387f04-3154-42ef-b673-a243a66904de.png",
          "/lovable-uploads/9e390d7a-1b19-4862-8706-7a0630051ed3.png",
          "/lovable-uploads/a9762eb7-6d2f-40c1-b23f-42e8c478f297.png"
        );
      }
      
      // For Willow plan (last 5 images)
      if (plan.name === "The Willow Plan") {
        images.push(
          "/lovable-uploads/34a83205-08c6-422c-8432-17ce1ceb1bea.png",
          "/lovable-uploads/c39f088a-7d6d-452f-9dcb-a62f496abf7e.png",
          "/lovable-uploads/d92cf2ac-d227-4b35-8771-6272c332f425.png",
          "/lovable-uploads/d8f39a33-8e8b-4250-bb64-096cc5f75992.png",
          "/lovable-uploads/48b1a295-b49e-4b1c-88ea-fa05934fd336.png"
        );
      }
      
      setPlanImages(images);
    }
  }, [plan, planId]);
  
  if (!plan) {
    return (
      <>
        <Navbar />
        <div className="container-custom py-32 text-center">
          <h2 className="text-3xl font-bold text-alto-blue mb-6">Plan Not Found</h2>
          <p className="mb-8">The floor plan you're looking for doesn't exist or has been moved.</p>
          <Link to="/plans" className="btn-primary">View All Plans</Link>
        </div>
        <Footer />
      </>
    );
  }
  
  // Extract bedrooms and bathrooms from specs
  const bedrooms = plan.specs.toLowerCase().includes('studio') 
    ? 'Studio' 
    : plan.specs.toLowerCase().includes('1 bed') 
      ? '1' 
      : plan.specs.toLowerCase().includes('2 bed') 
        ? '2' 
        : '0';
  
  const bathrooms = plan.specs.match(/(\d+\.?\d*)\s*bath/i)?.[1] || '1';

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <PlanDetailBanner 
        name={plan.name}
        specs={plan.specs}
        price={plan.price}
        squareFeet={plan.squareFeet || ""}
        stories={plan.stories || "One Story"}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
      />
      
      <div ref={contentRef} className="container-custom py-12">
        <Link to="/plans" className="inline-flex items-center text-alto-blue hover:underline mb-8 transition-colors hover:text-alto-accent">
          <ArrowLeft size={16} className="mr-2" /> Back to All Plans
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            {planImages.length > 0 && (
              <PlanGallery images={planImages} planName={plan.name} />
            )}
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-alto-blue mb-4">About {plan.name}</h2>
            <p className="text-alto-dark-gray mb-6">
              {plan.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col items-center justify-center p-4 bg-alto-light-gray rounded-lg">
                <Home size={24} className="text-alto-blue mb-2" />
                <span className="text-sm text-alto-dark-gray">
                  {plan.squareFeet || ""}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-alto-light-gray rounded-lg">
                <Bed size={24} className="text-alto-blue mb-2" />
                <span className="text-sm text-alto-dark-gray">
                  {bedrooms} {bedrooms === "1" ? "Bedroom" : bedrooms === "0" ? "Bedroom" : "Bedrooms"}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-alto-light-gray rounded-lg">
                <Bath size={24} className="text-alto-blue mb-2" />
                <span className="text-sm text-alto-dark-gray">
                  {bathrooms} {bathrooms === "1" ? "Bathroom" : "Bathrooms"}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-alto-light-gray rounded-lg">
                <Map size={24} className="text-alto-blue mb-2" />
                <span className="text-sm text-alto-dark-gray">
                  {plan.stories || "One Story"}
                </span>
              </div>
            </div>
            
            {plan.features && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-alto-blue mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className="text-alto-accent mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="bg-gradient-to-br from-alto-light-gray to-white p-6 rounded-lg mb-8 shadow-sm">
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Pricing Details</h3>
              <p className="text-alto-dark-gray mb-4">Starting at {plan.price}</p>
              <p className="text-sm text-alto-dark-gray">
                Pricing includes standard finishes and fixtures. Customize your ADU with premium options available upon request.
              </p>
            </div>
            
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Request More Information
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-alto-blue mb-6">Popular Uses for {plan.name}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-alto-blue mb-2">Guest Suite</h3>
              <p className="text-alto-dark-gray">
                Provide guests with a private, fully-equipped space featuring all essential amenities for a comfortable stay.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-alto-blue mb-2">Rental Unit</h3>
              <p className="text-alto-dark-gray">
                Create an attractive rental opportunity with a well-designed unit that tenants will appreciate for its thoughtful layout.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-alto-blue mb-2">Independent Living</h3>
              <p className="text-alto-dark-gray">
                Ideal for family members seeking an independent yet connected living space with all the comforts of home.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <CallToActionSection 
        title="Ready to Start Your ADU Project?"
        subtitle="Contact us today to discuss how we can customize this floor plan to your specific needs"
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />
      
      <Footer />
    </>
  );
};

export default PlanDetail;
