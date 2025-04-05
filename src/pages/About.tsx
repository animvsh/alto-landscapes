
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import PageTransition from '../components/PageTransition';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Users, Briefcase, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { teamMembers } from '../data/teamData';
import { Link } from 'react-router-dom';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <Navbar />
      <HeroSection 
        title="ABOUT ALTO BUILDERS"
        subtitle="Building Excellence Across Greater Los Angeles Since 2015"
        backgroundImage="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1920&q=80"
      />
      
      <div ref={containerRef} className="py-20">
        <div className="container-custom">
          {/* Our Story Section */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <h2 className="section-title mb-6">Our Story</h2>
                <p className="text-alto-dark-gray mb-6 text-lg">
                  Founded in 2015 by brothers Paul and Simon Manfredi, Alto Builders was born from a shared vision to transform the building experience in Greater Los Angeles.
                </p>
                <p className="text-alto-dark-gray mb-6">
                  With backgrounds in architecture and construction management, the Manfredi brothers recognized a growing need for high-quality, custom homes and remodels that could be built efficiently and affordably without compromising on design or craftsmanship.
                </p>
                <p className="text-alto-dark-gray mb-6">
                  Our mission is to bring predictability and peace of mind to your project, with all services handled under one roof for full accountability.
                </p>
                <p className="text-alto-dark-gray">
                  Today, Alto Builders has completed over 100 successful projects across Los Angeles and Ventura County, earning a reputation for excellence, reliability, and exceptional client service.
                </p>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/db14da64-e62b-4a45-8b3b-21620f0ce0ff.png" 
                    alt="Alto Builders Headquarters" 
                    className="rounded-lg shadow-lg w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                    <p className="text-3xl font-bold text-alto-blue">100+</p>
                    <p className="text-alto-dark-gray">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Father-Son Duo Section */}
          <motion.div 
            className="mb-24 bg-white p-10 rounded-2xl card-shadow"
            style={{ opacity, y }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-alto-blue mb-3">A Father-Son Duo Unlike Any Other</h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <img 
                  src="/lovable-uploads/863b5369-c588-422e-9459-9a532d57fbbd.png" 
                  alt="Paul and Simon Manfredi" 
                  className="w-full rounded-xl shadow-xl"
                />
              </div>
              <div className="lg:w-1/2">
                <p className="text-alto-dark-gray mb-6 text-lg leading-relaxed">
                  Alto Builders is more than just a business—it's a family team. Combining a father's years of building expertise with his son's modern innovations, they seamlessly blend traditional craftsmanship with contemporary design.
                </p>
                <p className="text-alto-dark-gray mb-6">
                  Together, they deliver top-notch quality and fresh ideas, setting them apart in the industry. This unique father-son partnership brings heart and dedication to every project, creating something truly special that reflects their combined experience and passion for construction.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-alto-light-gray p-4 rounded-lg">
                    <p className="font-semibold text-alto-blue">Paul Manfredi</p>
                    <p className="text-alto-dark-gray text-sm">30+ years experience</p>
                  </div>
                  <div className="bg-alto-light-gray p-4 rounded-lg">
                    <p className="font-semibold text-alto-blue">Simon Manfredi</p>
                    <p className="text-alto-dark-gray text-sm">Modern design approach</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Our Team Section */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="section-subtitle mx-auto">
                The dedicated professionals behind Alto Builders' success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-alto-blue mb-1">{member.name}</h3>
                    <p className="text-alto-accent mb-3">{member.position}</p>
                    <p className="text-alto-dark-gray mb-4">{member.bio}</p>
                    
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-alto-blue hover:text-alto-accent transition-colors inline-flex items-center"
                      >
                        <span className="mr-2">LinkedIn</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/team" className="btn-primary">
                View Full Team
              </Link>
            </div>
          </motion.div>

          {/* Company Values Section */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle mx-auto">
                The principles that guide everything we do at Alto Builders
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-alto-light-blue rounded-full p-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-alto-blue mb-2">Client-Focused Approach</h3>
                    <p className="text-alto-dark-gray">
                      We prioritize understanding our clients' needs and visions, working collaboratively to bring their dreams to life.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-alto-light-blue rounded-full p-3">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-alto-blue mb-2">Quality Craftsmanship</h3>
                    <p className="text-alto-dark-gray">
                      We never compromise on quality, using premium materials and skilled professionals for every aspect of your project.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-alto-light-blue rounded-full p-3">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-alto-blue mb-2">Professional Integrity</h3>
                    <p className="text-alto-dark-gray">
                      We maintain transparency in all our processes, from initial consultations to project completion and beyond.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-alto-light-blue rounded-full p-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-alto-blue mb-2">Community Commitment</h3>
                    <p className="text-alto-dark-gray">
                      We're deeply invested in the communities we serve, building relationships that extend beyond individual projects.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Service Areas Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="section-title">Where We Build</h2>
              <p className="section-subtitle mx-auto">
                Serving Los Angeles and Ventura County communities with exceptional building services
              </p>
            </div>

            <div className="bg-alto-blue rounded-xl overflow-hidden">
              <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Service Areas</h3>
                  <p className="text-white/80 mb-6">
                    We proudly serve Los Angeles and Ventura counties, including these areas and surrounding communities.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-white text-center">Los Angeles</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-white text-center">West LA</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-white text-center">Ventura</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-white text-center">Agoura Hills</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-white text-center">Calabasas</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-white text-center">Encino</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link to="/locations" className="inline-block bg-white text-alto-blue px-6 py-3 rounded-lg hover:bg-alto-accent hover:text-white transition-colors">
                      View All Service Areas
                    </Link>
                  </div>
                </div>
                
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1577217416316-5ac63a702587?auto=format&fit=crop&w=800&q=80" 
                    alt="Los Angeles Skyline" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <CallToActionSection 
        title="Ready to Work With Our Team?"
        subtitle="Schedule a consultation to discuss your project"
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />

      <Footer />
    </PageTransition>
  );
};

export default About;
