
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import ContactFAQ from '@/components/contact/ContactFAQ';
import { HelpCircle, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
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
            <div className="flex justify-center mb-4">
              <HelpCircle size={48} className="text-alto-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-alto-blue mb-4">Frequently Asked Questions</h1>
            <p className="text-alto-dark-gray max-w-2xl mx-auto">
              Find answers to the most common questions about our ADU services, process, and designs.
            </p>
          </motion.div>
        </div>
        
        <ContactFAQ />
        
        <div className="container-custom mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-alto-blue text-white p-8 md:p-12 rounded-lg text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <MessageSquare size={36} />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Still have questions?</h2>
            <p className="mb-6 text-white/80">
              Our team is ready to help answer any additional questions you might have about our ADU services.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-alto-blue px-6 py-3 rounded-md font-medium hover:bg-alto-accent hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default FAQ;
