
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import PageTransition from '../components/PageTransition';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import SocialLinks from '../components/contact/SocialLinks';
import ContactFAQ from '../components/contact/ContactFAQ';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <PageTransition>
      <Navbar />
      <ContactHero />

      <section className="py-20 bg-gradient-to-b from-white to-alto-light-gray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle mx-auto">
              We're here to answer your questions and discuss your project. Complete the form or contact us directly.
            </p>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              className="lg:w-2/5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-alto-blue mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-alto-light-gray p-3 rounded-full mr-4">
                        <Phone className="h-5 w-5 text-alto-blue" />
                      </div>
                      <div>
                        <p className="text-sm text-alto-dark-gray/70 mb-1">Phone</p>
                        <p className="text-alto-dark-gray font-medium">818-807-7587</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-alto-light-gray p-3 rounded-full mr-4">
                        <Mail className="h-5 w-5 text-alto-blue" />
                      </div>
                      <div>
                        <p className="text-sm text-alto-dark-gray/70 mb-1">Email</p>
                        <p className="text-alto-dark-gray font-medium">INFO@ALTOBUILDS.COM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-alto-light-gray p-3 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-alto-blue" />
                      </div>
                      <div>
                        <p className="text-sm text-alto-dark-gray/70 mb-1">Main Office</p>
                        <p className="text-alto-dark-gray font-medium">5450 LAKE LINDERO DR.</p>
                        <p className="text-alto-dark-gray font-medium">AGOURA HILLS, CA 91301</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-alto-light-gray p-3 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-alto-blue" />
                      </div>
                      <div>
                        <p className="text-sm text-alto-dark-gray/70 mb-1">Second Office</p>
                        <p className="text-alto-dark-gray font-medium">41969 MARGARITA RD</p>
                        <p className="text-alto-dark-gray font-medium">TEMECULA, CA 92591</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-alto-light-gray p-3 rounded-full mr-4">
                        <Clock className="h-5 w-5 text-alto-blue" />
                      </div>
                      <div>
                        <p className="text-sm text-alto-dark-gray/70 mb-1">Business Hours</p>
                        <p className="text-alto-dark-gray font-medium">Monday - Friday: 8AM - 6PM</p>
                        <p className="text-alto-dark-gray font-medium">Saturday: By appointment</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-alto-blue mb-6">Connect With Us</h3>
                  <SocialLinks />
                </div>
              </div>
              
              <div className="mt-8 bg-alto-blue rounded-xl p-8 text-white shadow-lg">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 mr-3" />
                  <h3 className="text-xl font-semibold">Quick Response Guarantee</h3>
                </div>
                <p className="mb-4 text-white/80">
                  We aim to respond to all inquiries within 24 hours during business days. Your project is important to us!
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-3/5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-2 bg-alto-blue text-white text-center">
                  <p className="font-medium">Let's Discuss Your Project</p>
                </div>
                <div className="p-8">
                  <ContactForm />
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 text-blue-700 rounded-md text-sm">
                <p><strong>Note:</strong> To enable actual email sending, the EmailJS credentials need to be configured in the ContactForm component.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <iframe 
            title="Alto Builders Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52861.03384834284!2d-118.7758413611941!3d34.15193087660529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e8253a503eb2fd%3A0x95db3a5844c0e5fa!2sAgoura%20Hills%2C%20CA%2091301!5e0!3m2!1sen!2sus!4v1654789442549!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '0.75rem' }}
            allowFullScreen={true}
            loading="lazy"
            className="shadow-lg"
          ></iframe>
        </div>
      </section>

      <ContactFAQ />

      <Footer />
    </PageTransition>
  );
};

export default Contact;
