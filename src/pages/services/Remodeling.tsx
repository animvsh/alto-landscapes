
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToActionSection from '../../components/CallToActionSection';
import { CheckCircle } from '../../components/CheckCircle';
import { Home, Paintbrush, UtensilsCrossed, Bath, Sofa, Hammer, Ruler, Clock, Award, Leaf, AlertTriangle } from 'lucide-react';
import ServiceCard from '../../components/ServiceCard';

const Remodeling = () => {
  const remodelingServices = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen with modern designs, quality materials, and expert craftsmanship.",
      icon: <UtensilsCrossed />,
      link: "/contact",
    },
    {
      title: "Bathroom Renovation",
      description: "Update your bathrooms with stylish fixtures, efficient layouts, and premium finishes.",
      icon: <Bath />,
      link: "/contact",
    },
    {
      title: "Interior Remodeling",
      description: "Revitalize your living spaces with comprehensive interior updates and renovations.",
      icon: <Sofa />,
      link: "/contact",
    },
    {
      title: "Home Additions",
      description: "Expand your living space with seamlessly integrated room additions and extensions.",
      icon: <Home />,
      link: "/contact",
    },
    {
      title: "Custom Finishes",
      description: "Elevate your home with custom cabinetry, built-ins, and architectural details.",
      icon: <Paintbrush />,
      link: "/contact",
    },
    {
      title: "Structural Upgrades",
      description: "Strengthen and modernize your home with essential structural improvements.",
      icon: <Hammer />,
      link: "/contact",
    },
  ];

  const faqItems = [
    {
      question: "How long does a typical kitchen remodel take?",
      answer: "A standard kitchen remodel typically takes 6-10 weeks from demolition to completion. The timeline can vary based on the scope of work, material availability, and any unexpected issues discovered during demolition. Our team provides a detailed timeline at the start of your project."
    },
    {
      question: "Will I need to move out during a remodeling project?",
      answer: "This depends on the scope of your remodel. For kitchen or bathroom renovations, you can usually remain in your home with some adjustments to your routine. For whole-home remodels or projects involving extensive demolition, temporary relocation might be more comfortable. We'll discuss this with you during the planning phase."
    },
    {
      question: "Do I need permits for a remodeling project?",
      answer: "Most substantial remodeling projects require permits, especially those involving structural changes, electrical or plumbing work, or room additions. As part of our service, we handle all permitting requirements, ensuring your project complies with local building codes and regulations."
    },
    {
      question: "How much should I budget for a remodeling project?",
      answer: "Remodeling costs vary widely depending on the scope, materials, and your location. As a general guideline, kitchen remodels might range from $30,000 to $80,000+, while bathroom remodels typically range from $15,000 to $40,000+. During our consultation, we'll provide a detailed estimate based on your specific requirements."
    },
    {
      question: "Can you work with my existing design or do I need to use your designers?",
      answer: "We're flexible and can work with existing plans or designs you may have. However, our in-house design team can offer valuable insights that may enhance your existing plans. We offer a collaborative approach, combining your vision with our expertise for the best results."
    }
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="HOME REMODELING"
        subtitle="Transforming living spaces with expert craftsmanship and modern designs"
        backgroundImage="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Expert Home Remodeling</h2>
            <p className="section-subtitle mx-auto">
              Alto Builders brings decades of experience to every remodeling project, large or small
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80" 
                alt="Modern kitchen remodel" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
              <h3 className="text-2xl font-semibold text-alto-blue mb-4">Quality Remodeling Services</h3>
              <p className="text-alto-dark-gray mb-6">
                Whether you're looking to update a single room or transform your entire home, Alto Builders 
                provides comprehensive remodeling services tailored to your vision, timeline, and budget. 
                Our team combines skilled craftsmanship with design expertise to create beautiful, 
                functional spaces that enhance your lifestyle.
              </p>
              <p className="text-alto-dark-gray mb-6">
                We handle every aspect of your remodeling project, from initial design and material 
                selection to permitting, construction, and final finishing touches. Our process emphasizes 
                clear communication, quality workmanship, and attention to detail at every stage.
              </p>
              
              <h4 className="font-semibold text-alto-blue mb-2">Why choose Alto Builders for your remodel?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Experienced craftsmen with skills across all trades</p>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Transparent pricing and detailed project timelines</p>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Responsive communication and exceptional project management</p>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Design expertise that balances aesthetics and functionality</p>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Comprehensive warranty on all workmanship</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {remodelingServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
                link={service.link} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Design & Build Approach</h2>
            <p className="section-subtitle mx-auto">
              A comprehensive solution for a seamless remodeling experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-alto-accent text-white rounded-full mx-auto mb-4">
                <Ruler size={28} />
              </div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Single Source Responsibility</h3>
              <p className="text-alto-dark-gray">
                With our design-build approach, you work with a single team from concept to completion, 
                eliminating the need to coordinate between separate design and construction services.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-alto-accent text-white rounded-full mx-auto mb-4">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Faster Project Delivery</h3>
              <p className="text-alto-dark-gray">
                Our integrated approach reduces the time between design completion and construction start. 
                Design and pre-construction planning happen simultaneously, shortening your overall timeline.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-alto-accent text-white rounded-full mx-auto mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Quality Control</h3>
              <p className="text-alto-dark-gray">
                With designers and builders working together from day one, we ensure constructability of 
                designs while maintaining the highest standards of quality throughout your project.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start mb-6">
              <div className="text-amber-500 mr-3 mt-1">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-alto-blue mb-2">Common Remodeling Mistakes We Help You Avoid</h3>
                <p className="text-alto-dark-gray">
                  Our experienced team helps you navigate potential pitfalls in your remodeling journey. Here are some common mistakes we'll help you avoid:
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-alto-blue mb-2">Underestimating Costs</h4>
                <p className="text-alto-dark-gray text-sm">
                  We provide detailed, realistic estimates that account for all aspects of your project, including potential contingencies for unexpected issues.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-alto-blue mb-2">Poor Space Planning</h4>
                <p className="text-alto-dark-gray text-sm">
                  Our designers consider both aesthetics and functionality, ensuring your newly remodeled spaces work efficiently for your lifestyle.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-alto-blue mb-2">Choosing Trendy Over Timeless</h4>
                <p className="text-alto-dark-gray text-sm">
                  We help you balance current trends with classic elements that will stand the test of time, maximizing your investment's longevity.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-alto-blue mb-2">Neglecting Lighting Design</h4>
                <p className="text-alto-dark-gray text-sm">
                  Our comprehensive approach includes detailed lighting plans that enhance both the functionality and atmosphere of your renovated spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Eco-Friendly Remodeling</h2>
            <p className="section-subtitle mx-auto">
              Sustainable practices and materials for environmentally conscious renovations
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1534705867302-2a41394d2a3b?auto=format&fit=crop&w=800&q=80" 
                alt="Eco-friendly renovation materials" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-alto-blue mb-1">Sustainable Materials</h4>
                    <p className="text-alto-dark-gray">We source eco-friendly, recycled, and low-VOC materials that reduce environmental impact while creating healthier indoor environments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-alto-blue mb-1">Energy Efficiency</h4>
                    <p className="text-alto-dark-gray">Our remodels incorporate energy-efficient appliances, LED lighting, improved insulation, and high-performance windows to reduce utility costs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-alto-blue mb-1">Water Conservation</h4>
                    <p className="text-alto-dark-gray">We install low-flow fixtures, efficient irrigation systems, and other water-saving features to help conserve this valuable resource.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-alto-blue mb-1">Waste Reduction</h4>
                    <p className="text-alto-dark-gray">Our construction practices minimize waste through careful planning, recycling of construction debris, and repurposing materials when possible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Common questions about the remodeling process
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
                <h3 className="text-lg font-semibold text-alto-blue mb-2">{item.question}</h3>
                <p className="text-alto-dark-gray">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Remodeling Process</h2>
            <p className="section-subtitle mx-auto">
              A thoughtful approach that puts your vision and convenience first
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-lg font-bold">1</div>
              <h3 className="text-lg font-semibold text-alto-blue mb-3">Consultation</h3>
              <p className="text-alto-dark-gray text-sm">
                We discuss your vision, needs, and budget to create a preliminary project plan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-lg font-bold">2</div>
              <h3 className="text-lg font-semibold text-alto-blue mb-3">Design</h3>
              <p className="text-alto-dark-gray text-sm">
                Our design team creates detailed plans and material selections for your approval.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-lg font-bold">3</div>
              <h3 className="text-lg font-semibold text-alto-blue mb-3">Construction</h3>
              <p className="text-alto-dark-gray text-sm">
                Our skilled team executes the plans with precision, keeping you informed throughout.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-lg font-bold">4</div>
              <h3 className="text-lg font-semibold text-alto-blue mb-3">Completion</h3>
              <p className="text-alto-dark-gray text-sm">
                We conduct thorough inspections and ensure your complete satisfaction before final handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Ready to Transform Your Home?"
        subtitle="Contact us today to schedule your free consultation"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Remodeling;
