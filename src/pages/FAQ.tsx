
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
              <div className="bg-alto-light-gray p-4 rounded-full">
                <HelpCircle size={48} className="text-alto-accent" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="heading-accent">Frequently Asked</span>{' '}
              <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-alto-dark-gray max-w-2xl mx-auto text-lg">
              Find answers to the most common questions about our ADU services, process, and designs.
            </p>
          </motion.div>
        </div>
        
        <ContactFAQ />
        
        <div className="container-custom mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-premium-gradient text-white p-10 md:p-16 rounded-xl text-center max-w-4xl mx-auto shadow-2xl"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <MessageSquare size={36} />
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 heading-accent">Still have questions?</h2>
            <p className="mb-8 text-white/90 text-lg max-w-2xl mx-auto">
              Our team is ready to help answer any additional questions you might have about our ADU services.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-alto-blue px-8 py-4 rounded-lg font-medium hover:bg-alto-accent hover:text-white transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
            >
              Contact Our Experts
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default FAQ;
