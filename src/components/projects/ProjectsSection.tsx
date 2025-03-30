
import React from 'react';
import { projects } from '../../data/projectsData';
import ProjectGrid from './ProjectGrid';
import { Building2 } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Weiss Family ADU Project</h2>
          <p className="section-subtitle mx-auto">
            An elegant and functional Accessory Dwelling Unit in Los Angeles
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              <Building2 className="w-20 h-20 text-alto-blue" />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-semibold mb-4">Accessory Dwelling Units</h3>
              <p className="mb-4">
                At Alto Builders, we understand that Accessory Dwelling Units (ADUs) are more than just additional spaces—they're extensions of your home's value and functionality. Whether you're building an ADU for rental income, a home office, or a guest retreat, our team is dedicated to creating a space that perfectly reflects your vision and meets your needs.
              </p>
              <p>
                Our skilled craftsmen and design experts bring your ideas to life, starting with a complimentary design consultation. We specialize in everything from structural work and custom layouts to energy-efficient solutions and high-quality finishes. With extensive knowledge of zoning regulations and material durability, we ensure your ADU is not only beautifully designed but also built to last. Let Alto Builders transform your property with an ADU that combines style, practicality, and long-term value.
              </p>
            </div>
          </div>
        </div>

        <ProjectGrid projects={projects} />
        
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">Starting on the Right Foot</h3>
          <p className="mb-4">
            Are you considering adding an Accessory Dwelling Unit (ADU) to your property but unsure how to make the most of the space? At Alto Builders, our expert team specializes in designing and building ADUs that maximize functionality without compromising on style. Using Chief Architect, we create detailed 3D renderings, allowing you to visualize every aspect of your ADU, from custom layouts to high-quality finishes, tailored specifically to your needs.
          </p>
          <p className="mb-6">
            Our meticulous planning and outstanding craftsmanship ensure that your ADU not only complements your property but also enhances its value and usability. Whether you're creating a rental unit, a home office, or a guest retreat, we transform your vision into a beautiful, functional reality. Reach out today to start designing an ADU that perfectly fits your goals and lifestyle.
          </p>
          <div className="flex justify-center mt-8">
            <a 
              href="/contact" 
              className="bg-alto-blue text-white py-3 px-8 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
