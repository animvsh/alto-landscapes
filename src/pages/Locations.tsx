
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import LocationCard from '../components/LocationCard';
import CallToActionSection from '../components/CallToActionSection';
import { MapPin, Search } from 'lucide-react';

// Mock locations data - in a real app this would come from a database or API
const locations = [
  {
    name: "Los Angeles",
    slug: "los-angeles",
    image: "https://images.unsplash.com/photo-1610135206703-0432c637ea32?auto=format&fit=crop&w=1000&q=80",
    description: "Premium ADUs built to the highest standard in the heart of Los Angeles."
  },
  {
    name: "Malibu",
    slug: "malibu",
    image: "https://images.unsplash.com/photo-1532922141873-ac111ffb7bd0?auto=format&fit=crop&w=1000&q=80",
    description: "Luxury ADUs with ocean views and premium finishes in Malibu."
  },
  {
    name: "Beverly Hills",
    slug: "beverly-hills",
    image: "https://images.unsplash.com/photo-1641025389843-731bb27d2dbc?auto=format&fit=crop&w=1000&q=80",
    description: "High-end ADUs designed for the discerning Beverly Hills homeowner."
  },
  {
    name: "Santa Monica",
    slug: "santa-monica",
    image: "https://images.unsplash.com/photo-1589649816779-a437b1431943?auto=format&fit=crop&w=1000&q=80",
    description: "Modern coastal ADUs built with sustainable materials in Santa Monica."
  },
  {
    name: "Pasadena",
    slug: "pasadena",
    image: "https://images.unsplash.com/photo-1541702467897-41bffd037f57?auto=format&fit=crop&w=1000&q=80",
    description: "Classic and contemporary ADUs that complement historic Pasadena homes."
  },
  {
    name: "Glendale",
    slug: "glendale",
    image: "https://images.unsplash.com/photo-1534691157507-c26cd21968ae?auto=format&fit=crop&w=1000&q=80",
    description: "Custom ADUs built to maximize space and value in Glendale properties."
  },
  {
    name: "Burbank",
    slug: "burbank",
    image: "https://images.unsplash.com/photo-1507904683061-37a6466bb383?auto=format&fit=crop&w=1000&q=80",
    description: "Entertainment industry-focused ADUs with home offices and studios in Burbank."
  },
  {
    name: "Long Beach",
    slug: "long-beach",
    image: "https://images.unsplash.com/photo-1610461626567-583f8ee39c04?auto=format&fit=crop&w=1000&q=80",
    description: "Waterfront-inspired ADUs with modern amenities in Long Beach."
  }
];

const Locations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLocations, setFilteredLocations] = useState(locations);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    const filtered = locations.filter(location => 
      location.name.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredLocations(filtered);
  };

  return (
    <>
      <Navbar />
      
      <HeroSection 
        title="PREMIUM ADUs ACROSS GREATER LOS ANGELES"
        subtitle="Discover our service areas and explore our custom ADU solutions tailored to each location's unique style and regulations"
        backgroundImage="/lovable-uploads/0c68869a-32d1-44d8-9ac1-54e244d63739.png"
        buttonText="FIND YOUR LOCATION"
        buttonLink="#locations-grid"
      />
      
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-alto-blue mb-4"
            >
              Where We Build
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-alto-dark-gray max-w-3xl mx-auto"
            >
              Alto Builders specializes in premium ADU construction across Los Angeles County and surrounding areas. Each location has unique requirements and aesthetics that we expertly navigate.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl mx-auto mb-16 relative"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-alto-dark-gray" />
              <input 
                type="text" 
                placeholder="Search for a location..." 
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-12 py-4 rounded-full bg-alto-light-gray placeholder-alto-dark-gray/50 focus:outline-none focus:ring-2 focus:ring-alto-accent shadow-md"
              />
            </div>
          </motion.div>
          
          <div id="locations-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLocations.map((location, index) => (
              <LocationCard 
                key={location.slug} 
                name={location.name} 
                slug={location.slug} 
                image={location.image}
                description={location.description}
              />
            ))}
          </div>
          
          {filteredLocations.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-alto-dark-gray mb-4">No locations found matching "{searchTerm}".</p>
              <p>Please try another search term or browse our service areas above.</p>
            </motion.div>
          )}
        </div>
      </section>
      
      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-alto-blue mb-6"
            >
              Don't See Your Location?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-alto-dark-gray mb-8"
            >
              We serve many areas throughout Greater Los Angeles and Ventura County. Contact us to check if we cover your specific location or to discuss your custom ADU project.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row justify-center gap-6 items-center bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center text-left">
                <MapPin size={24} className="text-alto-blue mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-alto-blue">Our Service Range</h3>
                  <p className="text-alto-dark-gray">We typically service within a 50-mile radius of Los Angeles</p>
                </div>
              </div>
              <a 
                href="/contact" 
                className="premium-button whitespace-nowrap"
              >
                Check Your Location
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CallToActionSection 
        title="Ready to Build Your Premium ADU?"
        subtitle="Contact us today to discuss your project and schedule a consultation with our expert team"
        buttonText="Start Your Build"
        buttonLink="/contact"
      />
      
      <Footer />
    </>
  );
};

export default Locations;
