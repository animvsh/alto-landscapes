
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { bathroomProjects } from '../../data/bathroomProjectsData';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin } from 'lucide-react';

const BathroomProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Filter projects based on search term
  const filteredProjects = bathroomProjects.filter(project => {
    return project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           project.location.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-alto-light-gray">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-alto-blue mb-4">Bathroom Remodeling Projects</h2>
          <p className="text-xl text-alto-dark-gray max-w-3xl mx-auto">
            Browse our collection of bathroom transformations across Los Angeles and surrounding areas
          </p>
          
          <div className="relative max-w-md mx-auto mt-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-alto-dark-gray/60" />
            <input
              type="text"
              placeholder="Search projects by location..."
              className="w-full pl-10 pr-3 py-3 bg-white rounded-full border border-alto-gray focus:outline-none focus:ring-2 focus:ring-alto-accent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link to={`/projects/bathroom/${project.id}`}>
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={project.images[0]} 
                      alt={`${project.title} in ${project.location}`}
                      className={`w-full h-full object-cover transition-all duration-500 ${hoveredProject === project.id ? 'scale-110' : 'scale-100'}`}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex items-center text-white">
                        <MapPin className="h-4 w-4 mr-1" />
                        <p className="text-sm">{project.location}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-alto-blue mb-2">{project.title}</h3>
                    <p className="text-alto-dark-gray mb-4 line-clamp-3">
                      {project.description.substring(0, 100)}...
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="bg-alto-light-gray px-3 py-1 rounded-full text-sm text-alto-blue">
                          {feature.split(' ').slice(0, 2).join(' ')}...
                        </span>
                      ))}
                    </div>
                    <div 
                      className="text-alto-accent font-medium inline-flex items-center hover:underline"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-alto-dark-gray">No bathroom projects found matching your search.</p>
          </div>
        )}
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link 
            to="/contact" 
            className="btn-primary inline-flex items-center"
          >
            Start Your Bathroom Remodel
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BathroomProjectsSection;
