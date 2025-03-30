
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import TeamMemberCard from '../TeamMemberCard';
import { AboutSectionProps } from './interfaces';

const AboutSection = ({
  title = "Los Angeles & Ventura County ADU Specialists",
  subtitle = "We are ALTO BUILDERS",
  primaryButtonText = "Learn More",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Browse Floor Plans",
  secondaryButtonLink = "/floor-plans",
  className
}: AboutSectionProps) => {
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }
    
    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={aboutSectionRef}
      className={`py-20 bg-alto-light-gray ${className || ''}`}
    >
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title">{title}</h2>
          <p className="font-semibold text-xl text-alto-blue mb-6">{subtitle}</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className={`md:w-1/2 transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-alto-dark-gray mb-6">
              At Alto Builders, we specialize in designing and building accessory dwelling units (ADUs), often called granny flats, casitas, guest houses, or in-law suites, throughout Los Angeles and Ventura County. As a licensed general contractor, we manage every aspect of the ADU process—from design and permitting to construction—ensuring a seamless experience from start to finish. 
            </p>
            <p className="text-alto-dark-gray mb-6">
              Our mission is to bring predictability and peace of mind to your backyard ADU project, with all services handled under one roof for full accountability.
            </p>
            <p className="text-alto-dark-gray mb-6">
              We offer a range of options, including both standard and custom ADU floor plans, tailored to meet the needs of multigenerational families and real estate investors alike. Our expert team oversees every detail, from initial planning and budgeting to material selection, design, plan checks, permitting, and construction.
            </p>
            <p className="text-alto-dark-gray mb-6">
              With a streamlined, end-to-end approach, we consistently deliver projects on time and within budget, without compromising on quality. Backed by over 30 years of industry experience and glowing client feedback, we are committed to providing an exceptional customer experience at every stage of your ADU journey.
            </p>
          </div>
          
          <div className={`md:w-1/2 transition-all duration-1000 delay-300 ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="mb-10">
              <img 
                src="/lovable-uploads/44aeeca9-3113-4e64-a595-18432655f328.png" 
                alt="Paul and Simon Manfredi" 
                className="w-full rounded-lg shadow-lg mb-4 card-shadow"
              />
              <p className="text-center text-sm text-alto-dark-gray italic">Paul and Simon Manfredi, Co-Founders of Alto Builders</p>
            </div>
            
            <div className="mt-10 bg-white p-8 rounded-lg card-shadow text-center">
              <h3 className="text-2xl font-semibold text-alto-blue mb-4">Want to learn more about your ADU Project?</h3>
              <p className="text-alto-dark-gray mb-6">We'd love to help</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to={primaryButtonLink} className="btn-primary">
                  {primaryButtonText}
                </Link>
                <Link to={secondaryButtonLink} className="btn-secondary">
                  {secondaryButtonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
