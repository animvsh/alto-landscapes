
import React from 'react';
import { Link } from 'react-router-dom';
import { bathroomProjects } from '../../data/bathroomProjectsData';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const BathroomProjectsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-alto-blue mb-4">Bathroom Remodeling Projects</h2>
          <p className="text-xl text-alto-dark-gray max-w-3xl mx-auto">
            Browse our collection of bathroom transformations across Los Angeles and surrounding areas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {bathroomProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} in ${project.location}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-alto-blue mb-2">{project.title}</h3>
                  <p className="text-alto-accent mb-3">{project.location}</p>
                  <p className="text-alto-dark-gray mb-4 line-clamp-3">
                    {project.description.substring(0, 120)}...
                  </p>
                  <Link 
                    to={`/projects/bathroom/${project.id}`} 
                    className="text-alto-accent font-medium inline-flex items-center hover:underline"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/contact" 
            className="btn-primary inline-flex items-center"
          >
            Start Your Bathroom Remodel
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BathroomProjectsSection;
