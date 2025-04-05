
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import ServicesList from '../components/services/ServicesList';
import ProcessSection from '../components/services/ProcessSection';
import WhyChooseUs from '../components/services/WhyChooseUs';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Home, ChefHat, Bath, Palmtree, Hammer } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCards = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into a beautiful and functional space that meets your unique needs with our expert design-build services.",
      icon: <ChefHat className="h-10 w-10" />,
      bgImage: "/lovable-uploads/a9f018d8-dc43-4cbf-8531-2e2ebfb5af32.png",
      link: "/services/kitchen"
    },
    {
      title: "Bathroom Remodeling",
      description: "Create a luxurious bathroom retreat that combines style, functionality, and innovative design tailored to your preferences.",
      icon: <Bath className="h-10 w-10" />,
      bgImage: "/lovable-uploads/d33dd254-8f59-4d6a-a2bc-62328b665b2d.png",
      link: "/services/bathroom"
    },
    {
      title: "Backyard Projects",
      description: "Maximize your outdoor living space with custom patios, decks, outdoor kitchens, and landscaping solutions.",
      icon: <Palmtree className="h-10 w-10" />,
      bgImage: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=800&q=80",
      link: "/services/backyard"
    },
    {
      title: "New Construction",
      description: "Build your dream home from the ground up with our comprehensive design-build services and expert craftsmanship.",
      icon: <Home className="h-10 w-10" />,
      bgImage: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?auto=format&fit=crop&w=800&q=80",
      link: "/services/new-construction"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <PageTransition>
      <Navbar />
      <HeroSection 
        title="OUR SERVICES"
        subtitle="Comprehensive building solutions from concept to completion"
        backgroundImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Premium Construction Services</h2>
            <p className="section-subtitle mx-auto">
              From initial concept to final completion, we offer comprehensive building and remodeling services
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {serviceCards.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link to={service.link} className="block h-full">
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 group">
                    <div 
                      className="h-64 relative overflow-hidden"
                      style={{
                        backgroundImage: `url(${service.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                        <div className="text-white">
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                        </div>
                      </div>
                      <div className="absolute top-6 right-6 bg-white/90 p-3 rounded-full">
                        {service.icon}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-alto-dark-gray mb-4">{service.description}</p>
                      <div className="flex items-center text-alto-accent font-medium group-hover:translate-x-1 transition-transform">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-16 p-8 bg-alto-light-gray rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/5 mb-6 md:mb-0 flex justify-center">
                <div className="bg-alto-blue rounded-full p-6 inline-flex">
                  <Hammer className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="md:w-3/5 md:px-8">
                <h3 className="text-2xl font-bold text-alto-blue mb-2">Custom ADU Construction</h3>
                <p className="text-alto-dark-gray">
                  Maximize your property's potential with our custom ADU solutions. Whether you're looking to create additional living space for family members, generate rental income, or increase your home's value, our expert team will guide you through every step of the process.
                </p>
              </div>
              <div className="md:w-1/5 mt-6 md:mt-0 text-center">
                <Link 
                  to="/services/adu" 
                  className="btn-primary inline-block"
                >
                  Explore ADUs
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Design-Build Approach</h2>
            <p className="section-subtitle mx-auto">
              We handle every aspect of your project, bringing your vision to life with efficiency and craftsmanship
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-full bg-alto-blue w-12 h-12 flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-alto-blue mb-4">Consultation & Design</h3>
              <p className="text-alto-dark-gray">
                We begin with a thorough consultation to understand your vision, needs, and budget. Our design team then creates detailed plans and 3D renderings to bring your ideas to life.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-full bg-alto-blue w-12 h-12 flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-alto-blue mb-4">Planning & Permits</h3>
              <p className="text-alto-dark-gray">
                Our team handles all necessary planning and permitting requirements, navigating local regulations to ensure your project proceeds smoothly and meets all code requirements.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="rounded-full bg-alto-blue w-12 h-12 flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-alto-blue mb-4">Construction & Completion</h3>
              <p className="text-alto-dark-gray">
                Our skilled craftsmen execute the construction phase with precision and attention to detail, keeping you informed throughout the process until the final walkthrough.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <ProcessSection />
      <WhyChooseUs />

      <section className="py-20 bg-gradient-to-b from-white to-alto-light-gray">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              Feedback from satisfied homeowners across Los Angeles and Ventura County
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-alto-dark-gray mb-6 italic">
                "Working with Alto Builders on our kitchen remodel was an exceptional experience. Their attention to detail and quality craftsmanship exceeded our expectations. The team was professional, communicative, and completed the project on time and on budget."
              </p>
              <div>
                <p className="font-semibold text-alto-blue">Sarah M.</p>
                <p className="text-sm text-alto-dark-gray">Los Angeles, CA</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-alto-dark-gray mb-6 italic">
                "Alto Builders transformed our backyard with a beautiful outdoor living space. From the initial design to the finished product, they guided us through every step. Their knowledge of local regulations saved us from potential headaches."
              </p>
              <div>
                <p className="font-semibold text-alto-blue">David T.</p>
                <p className="text-sm text-alto-dark-gray">Agoura Hills, CA</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-alto-dark-gray mb-6 italic">
                "Our ADU project with Alto Builders was seamless from start to finish. They handled all permits and regulations, provided creative design solutions for our small space, and delivered a beautiful finished product that has significantly increased our property value."
              </p>
              <div>
                <p className="font-semibold text-alto-blue">Jennifer R.</p>
                <p className="text-sm text-alto-dark-gray">Ventura, CA</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

export default Services;
