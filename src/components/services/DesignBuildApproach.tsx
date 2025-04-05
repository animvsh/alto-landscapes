
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ScrollReveal';

const DesignBuildApproach = () => {
  const steps = [
    {
      title: "Consultation & Design",
      description: "We begin with a thorough consultation to understand your vision, needs, and budget. Our design team then creates detailed plans and 3D renderings to bring your ideas to life."
    },
    {
      title: "Planning & Permits",
      description: "Our team handles all necessary planning and permitting requirements, navigating local regulations to ensure your project proceeds smoothly and meets all code requirements."
    },
    {
      title: "Construction & Completion",
      description: "Our skilled craftsmen execute the construction phase with precision and attention to detail, keeping you informed throughout the process until the final walkthrough."
    }
  ];

  return (
    <section className="py-20 bg-alto-light-gray">
      <div className="container-custom">
        <ScrollReveal animation="slide-up">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Design-Build Approach</h2>
            <p className="section-subtitle mx-auto">
              We handle every aspect of your project, bringing your vision to life with efficiency and craftsmanship
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal
              key={index} 
              animation="slide-up"
              delay={0.1 * (index + 1)}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <div className="rounded-full bg-gradient-to-r from-alto-blue to-alto-accent w-12 h-12 flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-alto-blue mb-4">{step.title}</h3>
                <p className="text-alto-dark-gray">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal animation="fade" delay={0.6} className="mt-12 text-center">
          <Link to="/contact" className="btn-primary transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
            Schedule a Consultation
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DesignBuildApproach;
