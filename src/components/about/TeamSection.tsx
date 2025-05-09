
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { teamMembers } from "../../data/teamData";

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="text-center mb-20" ref={sectionRef}>
      <h2 className="section-title">Meet Our Team</h2>
      <p className="section-subtitle mx-auto mb-10">
        The dedicated professionals behind Alto Builders
      </p>
      
      <motion.div 
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div 
          className="bg-white p-8 rounded-lg card-shadow mb-8"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="/lovable-uploads/fb277fa8-69d3-4ca9-844d-2f8311faf420.png" 
                alt="Paul and Simon Manfredi, Alto Builders Co-Founders" 
                className="w-full rounded-lg shadow-lg mb-6"
              />
              <p className="text-center text-lg font-semibold text-alto-blue mb-2">Paul and Simon Manfredi</p>
              <p className="text-center text-alto-dark-gray mb-6">Co-Founders, Alto Builders</p>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Our Leadership</h3>
              <p className="text-alto-dark-gray mb-6">
                With over 30 years of combined experience in the building industry, Paul and Simon Manfredi have established Alto Builders as a premier construction company in the Greater Los Angeles area. Their commitment to quality craftsmanship, innovative design, and client satisfaction has earned them a reputation for excellence in the industry.
              </p>
              <div>
                <h4 className="text-lg font-semibold text-alto-blue mb-2">Paul Manfredi</h4>
                <p className="text-alto-dark-gray mb-1 font-medium">Co-Founder</p>
                <p className="text-alto-dark-gray mb-4">
                  With over 30 years of expertise in the building industry, Paul stands as a cornerstone of the Alto team. His journey into construction, a path shaped by a deep, familial legacy, began under the guidance of his father.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-alto-blue mb-2">Simon Manfredi</h4>
                <p className="text-alto-dark-gray mb-1 font-medium">Co-Founder</p>
                <p className="text-alto-dark-gray mb-4">
                  Simon's building journey, enriched by a distinguished education from the University of British Columbia's School of Architecture and Landscape (SALA) & the Sauder School of Business, mirrors the foundational principles instilled in him by his father.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="text-center mt-8">
          <Button asChild className="bg-alto-blue hover:bg-alto-light-blue">
            <Link to="/team">Meet Our Full Team</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamSection;
