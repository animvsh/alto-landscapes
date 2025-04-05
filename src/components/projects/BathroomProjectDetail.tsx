
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../../data/bathroomProjectsData';
import PlanGallery from '../PlanGallery';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CallToActionSection from '../CallToActionSection';
import { ArrowLeft, Check } from 'lucide-react';

const BathroomProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = getProjectById(projectId || '');

  if (!project) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-3xl font-bold text-alto-blue mb-6">Project Not Found</h2>
        <p className="mb-6">Sorry, the bathroom project you're looking for doesn't exist.</p>
        <Link to="/projects" className="btn-primary">
          View All Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      
      <div className="container-custom pt-32 pb-16">
        <Link to="/projects" className="inline-flex items-center text-alto-blue hover:text-alto-accent transition-colors mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-alto-blue mb-2">{project.title}</h1>
          <p className="text-alto-accent text-xl mb-8">{project.location}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <PlanGallery images={project.images} planName={project.title} />
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-alto-blue mb-4">Project Overview</h2>
                  <p className="text-alto-dark-gray">{project.description}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-alto-blue mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-alto-accent mr-2 mt-1 flex-shrink-0" />
                        <span className="text-alto-dark-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-alto-blue mb-4">Design Process</h2>
                  <div className="flex items-center justify-between mb-4">
                    <img src="/lovable-uploads/c21b2613-e775-436c-b962-eccd213a044b.png" alt="Chief Architect Logo" className="h-8" />
                    <img src="/lovable-uploads/db2ae91a-2a43-4620-9356-8dfdbe5e9f0d.png" alt="Buildertrend Logo" className="h-8" />
                  </div>
                  <p className="text-alto-dark-gray mb-4">
                    We use Chief Architect to create detailed 3D renderings so you can visualize your new bathroom before construction begins. With Buildertrend, our project management software, we ensure seamless communication and full transparency.
                  </p>
                  <Link to="/contact" className="text-alto-accent font-medium inline-flex items-center hover:underline">
                    Start Your Project
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
        
        <div className="bg-alto-light-gray p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-alto-blue mb-4">Starting on the Right Foot</h2>
          <p className="text-alto-dark-gray mb-6">
            Struggling to turn your bathroom into the relaxing sanctuary you've always wanted? Our expert team specializes in bathroom remodeling, designing spaces that combine functionality, elegance, and comfort. Using Chief Architect, we create detailed 3D renderings so you can visualize every element of your new bathroom, from custom vanities to luxurious showers, before construction even begins. With Buildertrend, our project management software, we ensure seamless communication, accurate scheduling, and full transparency, making the entire remodeling process smooth and stress-free. Whether you're upgrading your fixtures or reimagining the entire space, we deliver exceptional craftsmanship to transform your bathroom into a serene retreat. Reach out today to begin your bathroom transformation with a team committed to your vision and satisfaction.
          </p>
        </div>
      </div>
      
      <CallToActionSection 
        title="Ready to Transform Your Bathroom?"
        subtitle="Schedule a free consultation with our team to discuss your project"
        buttonText="Get Your Free Site Assessment"
        buttonLink="/contact"
      />
      
      <Footer />
    </>
  );
};

export default BathroomProjectDetail;
