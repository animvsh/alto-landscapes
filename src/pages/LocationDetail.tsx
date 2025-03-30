
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import ContactForm from '../components/ContactForm';
import ProjectCard from '../components/ProjectCard';
import InfoCard from '../components/InfoCard';
import TestimonialCard from '../components/TestimonialCard';
import { FileText, DollarSign, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationDetail = () => {
  const { location } = useParams<{ location: string }>();
  
  // Format location name for display (e.g., "woodland-hills" to "Woodland Hills")
  const formatLocationName = (loc: string = '') => {
    return loc
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const locationName = formatLocationName(location);
  
  // Mock data - in a real app, this would come from a database or API
  const projects = [
    {
      title: `Modern ${locationName} ADU`,
      location: `${locationName}, CA`,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      link: `/projects/${location}-project-1`,
      description: `Sleek, contemporary ADU designed with premium materials in ${locationName}.`
    },
    {
      title: `Contemporary ${locationName} ADU`,
      location: `${locationName}, CA`,
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      link: `/projects/${location}-project-2`,
      description: `Open-concept living space with high-end finishes and natural light.`
    },
    {
      title: `Minimalist ${locationName} ADU`,
      location: `${locationName}, CA`,
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
      link: `/projects/${location}-project-3`,
      description: `Clean lines and efficient design maximize space and functionality.`
    },
  ];
  
  const testimonials = [
    {
      quote: `Working with Alto Builders on our ${locationName} ADU was a fantastic experience. They understood the local style and regulations perfectly.`,
      author: "Sarah Johnson",
      location: `${locationName}, CA`,
    },
    {
      quote: "The attention to detail and craftsmanship was exceptional. Our ADU has significantly increased our property value.",
      author: "Michael Chen",
      location: `${locationName}, CA`,
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title={`PREMIUM ADUs IN ${locationName.toUpperCase()}`}
        subtitle={`We specialize in designing and building luxury ADUs tailored to the unique zoning and architectural style of ${locationName}`}
        backgroundImage="/lovable-uploads/0c68869a-32d1-44d8-9ac1-54e244d63739.png"
      />

      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/3"
            >
              <h2 className="text-4xl font-bold mb-6 text-alto-blue">Why Build an ADU in {locationName}?</h2>
              <p className="text-alto-dark-gray mb-6 text-lg leading-relaxed">
                {locationName} offers excellent opportunities for ADU development with its combination of favorable zoning regulations, property values, and lifestyle benefits. 
              </p>
              <p className="text-alto-dark-gray mb-6 text-lg leading-relaxed">
                The area's spacious lots typically allow for larger ADUs, while the local climate is ideal for indoor-outdoor living spaces that extend the functional square footage of your unit.
              </p>
              <p className="text-alto-dark-gray mb-8 text-lg leading-relaxed">
                Whether you're looking to accommodate family members, generate rental income, or increase your property value, an ADU in {locationName} represents a smart investment with strong returns.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <InfoCard 
                  title="Local Regulations" 
                  description={`${locationName} has specific ADU regulations that our team navigates efficiently.`}
                  icon={<FileText size={32} />}
                />
                <InfoCard 
                  title="Market Value" 
                  description={`ADUs in ${locationName} typically yield strong ROI and rental potential.`}
                  icon={<DollarSign size={32} />}
                />
                <InfoCard 
                  title="Fast Approvals" 
                  description="Our expertise with local permits ensures an expedited process."
                  icon={<Zap size={32} />}
                />
              </div>
              
              <div className="bg-alto-light-gray p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-alto-blue">Key Features of {locationName} ADUs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight size={18} className="text-alto-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Architectural styles that complement the local neighborhood aesthetic</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="text-alto-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Energy-efficient designs optimized for the local climate</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="text-alto-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Premium finishes and fixtures selected for durability and style</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={18} className="text-alto-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Smart home technology integration for modern convenience</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-1/3"
            >
              <div className="bg-alto-blue rounded-lg p-8 text-white sticky top-24 shadow-xl">
                <h3 className="text-2xl font-semibold mb-4">Get Your Free Site Assessment</h3>
                <p className="mb-6 text-white/90">
                  Let's discuss your {locationName} ADU project. Complete this form for a free property evaluation and consultation.
                </p>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <input 
                    type="text" 
                    placeholder="Property Address" 
                    className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <select 
                    className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white"
                  >
                    <option value="" disabled selected className="text-gray-500">Timeline</option>
                    <option value="0-3 months">0-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                  <button className="w-full premium-button">
                    Submit
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-alto-blue"
            >
              Our Work in {locationName}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-alto-dark-gray max-w-3xl mx-auto"
            >
              Browse our portfolio of premium completed and in-progress ADUs in the area
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                title={project.title} 
                location={project.location} 
                image={project.image} 
                link={project.link} 
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-alto-blue"
            >
              {locationName} Client Testimonials
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-alto-dark-gray max-w-3xl mx-auto"
            >
              Hear from homeowners in {locationName} who have worked with Alto Builders
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                quote={testimonial.quote} 
                author={testimonial.author} 
                location={testimonial.location} 
              />
            ))}
          </div>
        </div>
      </section>

      <CallToActionSection 
        title={`Start Your ${locationName} ADU Journey Today`}
        subtitle="Schedule a free site assessment with our experienced team to explore your options"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default LocationDetail;
