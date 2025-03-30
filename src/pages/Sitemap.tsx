
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  Info, 
  ShoppingBag, 
  PenTool, 
  Home, 
  MapPin, 
  Send, 
  Shield, 
  HelpCircle,
  FileText,
  Users,
  Layers
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SiteSection {
  title: string;
  icon: React.ReactNode;
  links: {
    name: string;
    path: string;
  }[];
}

const Sitemap = () => {
  const siteSections: SiteSection[] = [
    {
      title: "Main Pages",
      icon: <HomeIcon className="h-6 w-6 text-alto-accent" />,
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      title: "ADU Plans",
      icon: <Home className="h-6 w-6 text-alto-accent" />,
      links: [
        { name: "All Plans", path: "/plans" },
        { name: "Studio ADUs", path: "/plans#studio" },
        { name: "One Bedroom ADUs", path: "/plans#one-bedroom" },
        { name: "Two Bedroom ADUs", path: "/plans#two-bedroom" },
      ]
    },
    {
      title: "Design",
      icon: <PenTool className="h-6 w-6 text-alto-accent" />,
      links: [
        { name: "Design Overview", path: "/design" },
        { name: "Interior Design", path: "/design#interior" },
        { name: "Exterior Design", path: "/design#exterior" },
      ]
    },
    {
      title: "Locations",
      icon: <MapPin className="h-6 w-6 text-alto-accent" />,
      links: [
        { name: "Service Areas", path: "/locations" },
        { name: "Los Angeles", path: "/locations/los-angeles" },
        { name: "Ventura County", path: "/locations/ventura-county" },
      ]
    },
    {
      title: "Information",
      icon: <Info className="h-6 w-6 text-alto-accent" />,
      links: [
        { name: "FAQ", path: "/faq" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Accessibility", path: "/accessibility-statement" },
      ]
    },
    {
      title: "Support",
      icon: <HelpCircle className="h-6 w-6 text-alto-accent" />,
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "Sitemap", path: "/sitemap" },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-28 pb-20 bg-gradient-to-b from-white to-alto-light-gray/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex justify-center items-center mb-6 bg-alto-light-gray p-4 rounded-full">
              <Layers size={36} className="text-alto-accent" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="heading-accent">Site</span>{' '}
              <span className="text-gradient">Map</span>
            </h1>
            <p className="text-alto-dark-gray max-w-2xl mx-auto text-lg">
              Navigate our website with ease. Find all sections and pages in one convenient location.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {siteSections.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-none shadow-lg overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-alto-blue to-alto-light-blue text-white">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/10 p-2 rounded-lg">
                        {section.icon}
                      </div>
                      <CardTitle>{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="hover:bg-alto-light-gray/50 rounded-lg transition-colors">
                          <Link 
                            to={link.path} 
                            className="block p-3 text-alto-dark-gray hover:text-alto-blue flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-alto-accent"></div>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="heading-accent">Need</span>{' '}
              <span className="text-gradient">Help?</span>
            </h2>
            <p className="text-alto-dark-gray mb-8 max-w-2xl mx-auto">
              If you can't find what you're looking for, our team is here to help you navigate your ADU journey.
            </p>
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base"
            >
              <Send size={16} />
              Contact Us
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Sitemap;
