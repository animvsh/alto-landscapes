
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import ContactForm from '../components/ContactForm';
import ProjectCard from '../components/ProjectCard';
import InfoCard from '../components/InfoCard';
import TestimonialCard from '../components/TestimonialCard';
import { FileText, DollarSign, Zap } from 'lucide-react';

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
    },
    {
      title: `Contemporary ${locationName} ADU`,
      location: `${locationName}, CA`,
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      link: `/projects/${location}-project-2`,
    },
    {
      title: `Minimalist ${locationName} ADU`,
      location: `${locationName}, CA`,
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
      link: `/projects/${location}-project-3`,
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
        title={`CUSTOM ADUs IN ${locationName.toUpperCase()}`}
        subtitle={`We specialize in designing and building ADUs tailored to the unique zoning and style of ${locationName}`}
        backgroundImage="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 md:pr-12 mb-8 md:mb-0">
              <h2 className="section-title">Why Build an ADU in {locationName}?</h2>
              <p className="text-alto-dark-gray mb-6">
                {locationName} offers excellent opportunities for ADU development with its combination of favorable zoning regulations, property values, and lifestyle benefits. 
              </p>
              <p className="text-alto-dark-gray mb-6">
                The area's spacious lots typically allow for larger ADUs, while the local climate is ideal for indoor-outdoor living spaces that extend the functional square footage of your unit.
              </p>
              <p className="text-alto-dark-gray mb-8">
                Whether you're looking to accommodate family members, generate rental income, or increase your property value, an ADU in {locationName} represents a smart investment with strong returns.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
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
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-alto-blue rounded-lg p-8 text-white sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Site Assessment</h3>
                <p className="mb-6">
                  Let's discuss your {locationName} ADU project. Complete this form for a free property evaluation.
                </p>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <input 
                    type="text" 
                    placeholder="Property Address" 
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <select 
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white"
                  >
                    <option value="" disabled selected className="text-gray-500">Timeline</option>
                    <option value="0-3 months">0-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                  <button className="w-full bg-white text-alto-blue font-medium py-2 px-4 rounded hover:bg-opacity-90 transition-colors">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Work in {locationName}</h2>
            <p className="section-subtitle mx-auto">
              Browse our portfolio of completed and in-progress ADUs in the area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                title={project.title} 
                location={project.location} 
                image={project.image} 
                link={project.link} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{locationName} Client Testimonials</h2>
            <p className="section-subtitle mx-auto">
              Hear from homeowners in {locationName} who have worked with Alto Builders
            </p>
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

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Contact Us About Your {locationName} ADU</h2>
            <p className="section-subtitle mx-auto">
              Ready to discuss your project in detail? Get in touch with our team
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <CallToActionSection 
        title={`Start Your ${locationName} ADU Journey Today`}
        subtitle="Schedule a free site assessment with our experienced team"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default LocationDetail;
