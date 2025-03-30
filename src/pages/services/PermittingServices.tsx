
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToActionSection from '../../components/CallToActionSection';
import { CheckCircle } from '../../components/CheckCircle';
import { FileText, ClipboardCheck, ShieldCheck, Clock, ScrollText, BookOpen } from 'lucide-react';
import ServiceCard from '../../components/ServiceCard';

const PermittingServices = () => {
  const permittingServices = [
    {
      title: "ADU Permit Acquisition",
      description: "Expert navigation of the ADU permitting process from start to approval.",
      icon: <FileText />,
      link: "/contact",
    },
    {
      title: "Code Compliance",
      description: "Ensure your project meets all local building codes and regulations.",
      icon: <ShieldCheck />,
      link: "/contact",
    },
    {
      title: "Document Preparation",
      description: "Complete preparation of all required documentation for permit submission.",
      icon: <ScrollText />,
      link: "/contact",
    },
    {
      title: "Expedited Processing",
      description: "Streamlined permit processing to minimize delays and accelerate your timeline.",
      icon: <Clock />,
      link: "/contact",
    },
    {
      title: "Permit Management",
      description: "Full-service oversight of the entire permitting process.",
      icon: <ClipboardCheck />,
      link: "/contact",
    },
    {
      title: "Regulatory Consultation",
      description: "Expert advice on navigating complex ADU regulations and requirements.",
      icon: <BookOpen />,
      link: "/contact",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="PERMITTING SERVICES"
        subtitle="Navigate the complex permitting process with expert guidance"
        backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Permit Navigation Experts</h2>
            <p className="section-subtitle mx-auto">
              Alto Builders takes the stress out of obtaining permits for your ADU or renovation project
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h3 className="text-2xl font-semibold text-alto-blue mb-4">Streamlined Permitting Process</h3>
              <p className="text-alto-dark-gray mb-6">
                Navigating the permitting process for ADUs and home renovations can be complicated and 
                time-consuming. Our permitting specialists have extensive experience with local regulations 
                and building departments throughout California, allowing us to streamline the process 
                and minimize delays.
              </p>
              <p className="text-alto-dark-gray mb-6">
                We handle every aspect of permit acquisition, from preparing and submitting documentation to 
                coordinating with city officials and addressing any requirements or revisions. Our goal is to 
                make the permitting process as smooth and efficient as possible, saving you time and frustration.
              </p>
              
              <h4 className="font-semibold text-alto-blue mb-2">Why our permitting services stand out:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">In-depth knowledge of local ADU regulations and zoning requirements</p>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Established relationships with local building departments</p>
                </li>
                <li className="flex items-start">
                  <div className="text-alto-accent mr-3 mt-1">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-alto-dark-gray">Proven strategies for addressing common permitting challenges</p>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" 
                alt="Permitting process documentation" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {permittingServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
                link={service.link} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Permitting Process</h2>
            <p className="section-subtitle mx-auto">
              A comprehensive approach that ensures a smooth approval process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-lg font-bold">1</div>
              <h3 className="text-lg font-semibold text-alto-blue mb-3">Assessment</h3>
              <p className="text-alto-dark-gray text-sm">
                We evaluate your property and project to identify relevant regulations and requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-lg font-bold">2</div>
              <h3 className="text-lg font-semibold text-alto-blue mb-3">Documentation</h3>
              <p className="text-alto-dark-gray text-sm">
                Our team prepares all necessary documents, plans, and applications for submission.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-lg font-bold">3</div>
              <h3 className="text-lg font-semibold text-alto-blue mb-3">Submission</h3>
              <p className="text-alto-dark-gray text-sm">
                We submit your application and actively manage the review process with local authorities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 flex items-center justify-center bg-alto-accent text-white rounded-full mb-4 text-lg font-bold">4</div>
              <h3 className="text-lg font-semibold text-alto-blue mb-3">Approval</h3>
              <p className="text-alto-dark-gray text-sm">
                We address any questions or revisions required by reviewers to secure final approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Ready to Navigate the Permitting Process?"
        subtitle="Contact us today to get started with our expert permitting services"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default PermittingServices;
