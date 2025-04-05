
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import ProjectsSection from '../components/projects/ProjectsSection';
import ProjectsApproach from '../components/projects/ProjectsApproach';
import PageTransition from '../components/PageTransition';
import BathroomProjectsSection from '../components/projects/BathroomProjectsSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if URL has a hash and scroll to that section
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Set active tab based on hash
          if (id === 'kitchen-projects') setActiveTab('kitchen');
          else if (id === 'bathroom-projects') setActiveTab('bathroom');
          else if (id === 'adu-projects') setActiveTab('adu');
        }, 500);
      }
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    
    // Scroll to appropriate section
    if (value !== 'all') {
      const element = document.getElementById(`${value}-projects`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <Navbar />
      <HeroSection 
        title="OUR PROJECTS"
        subtitle="Browse our portfolio of custom builds and remodels"
        backgroundImage="https://images.unsplash.com/photo-1523413363574-c30aa5c2d394?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Explore Our Portfolio</h2>
            <p className="section-subtitle mx-auto">
              Discover our completed projects across Los Angeles and Ventura County
            </p>
          </motion.div>
          
          <Tabs 
            value={activeTab} 
            onValueChange={handleTabChange}
            className="w-full mb-12"
          >
            <div className="flex justify-center">
              <TabsList className="bg-alto-light-gray">
                <TabsTrigger value="all" className="px-6">All Projects</TabsTrigger>
                <TabsTrigger value="kitchen" className="px-6">Kitchen</TabsTrigger>
                <TabsTrigger value="bathroom" className="px-6">Bathroom</TabsTrigger>
                <TabsTrigger value="adu" className="px-6">ADU</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
          
          <div id="all-projects" className={activeTab === 'all' ? 'block' : 'hidden'}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-alto-blue/5 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-alto-blue mb-4">Featured Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative group overflow-hidden rounded-lg h-80">
                    <img 
                      src="/lovable-uploads/710f9a5e-cc45-4a96-97ba-81f782a7d783.png" 
                      alt="Kitchen Renovation" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h4 className="text-xl font-semibold">West LA Kitchen</h4>
                        <p>Modern Kitchen Renovation</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-lg h-80">
                    <img 
                      src="/lovable-uploads/3ce8c2d6-0748-453e-86d5-59f0f2efce7b.png" 
                      alt="Bathroom Renovation" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h4 className="text-xl font-semibold">Los Angeles Bathroom</h4>
                        <p>Luxury Bathroom Remodel</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-lg h-80">
                    <img 
                      src="/lovable-uploads/d3cf4ce7-3f97-4189-96aa-90b3c9bd790d.png" 
                      alt="ADU Project" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h4 className="text-xl font-semibold">Weiss Family ADU</h4>
                        <p>Custom Accessory Dwelling Unit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="kitchen-projects" className="scroll-mt-20">
        <ProjectsSection />
      </div>
      
      <div id="bathroom-projects" className="scroll-mt-20">
        <BathroomProjectsSection />
      </div>
      
      <div id="adu-projects" className="scroll-mt-20 py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-alto-blue mb-4">ADU Projects</h2>
            <p className="text-xl text-alto-dark-gray max-w-3xl mx-auto">
              Explore our collection of custom Accessory Dwelling Units built across California
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={`/lovable-uploads/40c3a5c0-9f26-457a-ab09-af03114b9bdd.png`}
                      alt={`ADU Project ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-white text-xl font-semibold">ADU Project</h3>
                      <p className="text-white/80">Los Angeles, CA</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-alto-light-gray px-3 py-1 rounded-full text-sm text-alto-blue">
                        {index % 2 === 0 ? 'One Bedroom' : 'Studio'}
                      </span>
                      <span className="bg-alto-light-gray px-3 py-1 rounded-full text-sm text-alto-blue">
                        {(index % 3) + 1} Bath
                      </span>
                      <span className="bg-alto-light-gray px-3 py-1 rounded-full text-sm text-alto-blue">
                        {((index % 2) + 1) * 400} sq ft
                      </span>
                    </div>
                    <p className="text-alto-dark-gray mb-4">
                      Custom ADU with modern design and premium finishes, maximizing space efficiency.
                    </p>
                    <a href="#" className="text-alto-accent font-medium inline-flex items-center hover:underline">
                      View Project
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="/services/adu" className="btn-primary inline-flex items-center">
              Explore ADU Services
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <ProjectsApproach />

      <CallToActionSection 
        title="Ready to Start Your Project?"
        subtitle="Contact us today to schedule your free consultation"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <Footer />
    </PageTransition>
  );
};

export default Projects;
