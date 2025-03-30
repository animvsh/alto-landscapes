
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Bookmark, Home, Info, MapPin, Palette, Phone, Settings, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Sitemap = () => {
  return (
    <PageTransition>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-alto-blue mb-4">Site Map</h1>
            <p className="text-alto-dark-gray max-w-2xl mx-auto">
              Find your way around our website with the comprehensive sitemap below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Home className="text-alto-accent mr-3" size={24} />
                <h2 className="text-xl font-semibold text-alto-blue">Main Pages</h2>
              </div>
              <Separator className="mb-4" />
              <ul className="space-y-2">
                <li><Link to="/" className="text-alto-blue hover:text-alto-accent transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-alto-blue hover:text-alto-accent transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-alto-blue hover:text-alto-accent transition-colors">Services</Link></li>
                <li><Link to="/projects" className="text-alto-blue hover:text-alto-accent transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="text-alto-blue hover:text-alto-accent transition-colors">Contact</Link></li>
              </ul>
            </motion.div>

            {/* ADU & Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Palette className="text-alto-accent mr-3" size={24} />
                <h2 className="text-xl font-semibold text-alto-blue">Design & Plans</h2>
              </div>
              <Separator className="mb-4" />
              <ul className="space-y-2">
                <li><Link to="/design" className="text-alto-blue hover:text-alto-accent transition-colors">Design</Link></li>
                <li><Link to="/plans" className="text-alto-blue hover:text-alto-accent transition-colors">Plans & Pricing</Link></li>
                <li><Link to="/adu-basics" className="text-alto-blue hover:text-alto-accent transition-colors">ADU Basics</Link></li>
                <li><Link to="/adu-costs" className="text-alto-blue hover:text-alto-accent transition-colors">ADU Costs</Link></li>
                <li><Link to="/floor-plans" className="text-alto-blue hover:text-alto-accent transition-colors">Floor Plans</Link></li>
              </ul>
            </motion.div>

            {/* Locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <MapPin className="text-alto-accent mr-3" size={24} />
                <h2 className="text-xl font-semibold text-alto-blue">Locations</h2>
              </div>
              <Separator className="mb-4" />
              <ul className="space-y-2">
                <li><Link to="/locations" className="text-alto-blue hover:text-alto-accent transition-colors">Service Areas</Link></li>
                <li><Link to="/city-regulations" className="text-alto-blue hover:text-alto-accent transition-colors">City Regulations</Link></li>
                <li><Link to="/process" className="text-alto-blue hover:text-alto-accent transition-colors">Our Process</Link></li>
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Info className="text-alto-accent mr-3" size={24} />
                <h2 className="text-xl font-semibold text-alto-blue">Resources</h2>
              </div>
              <Separator className="mb-4" />
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-alto-blue hover:text-alto-accent transition-colors">FAQ</Link></li>
                <li><Link to="/process" className="text-alto-blue hover:text-alto-accent transition-colors">Our Process</Link></li>
                <li><Link to="/sitemap" className="text-alto-blue hover:text-alto-accent transition-colors">Sitemap</Link></li>
              </ul>
            </motion.div>

            {/* Contact & Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Phone className="text-alto-accent mr-3" size={24} />
                <h2 className="text-xl font-semibold text-alto-blue">Contact & Support</h2>
              </div>
              <Separator className="mb-4" />
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-alto-blue hover:text-alto-accent transition-colors">Contact Us</Link></li>
                <li><a href="tel:+18188077587" className="text-alto-blue hover:text-alto-accent transition-colors">818-807-7587</a></li>
                <li><a href="mailto:info@altobuilds.com" className="text-alto-blue hover:text-alto-accent transition-colors">info@altobuilds.com</a></li>
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Settings className="text-alto-accent mr-3" size={24} />
                <h2 className="text-xl font-semibold text-alto-blue">Legal</h2>
              </div>
              <Separator className="mb-4" />
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-alto-blue hover:text-alto-accent transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-alto-blue hover:text-alto-accent transition-colors">Terms of Service</Link></li>
                <li><Link to="/accessibility-statement" className="text-alto-blue hover:text-alto-accent transition-colors">Accessibility Statement</Link></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Sitemap;
