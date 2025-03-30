import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import FloorPlanCard from '../components/FloorPlanCard';
import InfoCard from '../components/InfoCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialCard from '../components/TestimonialCard';
import ProcessStep from '../components/ProcessStep';
import ScrollProgress from '../components/ScrollProgress';
import { ArrowRight, Home, Ruler, Calendar, Zap, DollarSign, Map, Users, BookOpen, Building, FileText, Briefcase } from 'lucide-react';

const Index = () => {
  // Floor plans data - adding price
  const floorPlans = [
    {
      name: "The Yosemite Plan",
      specs: "2 Bed, 2.5 Bath",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
      link: "/plans/yosemite",
      price: "$320,000",
    },
    {
      name: "The Glacier Plan",
      specs: "2 Bed, 2 Bath",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
      link: "/plans/glacier",
      price: "$280,000",
    },
    {
      name: "The Hickory Plan",
      specs: "2 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=600&q=80",
      link: "/plans/hickory",
      price: "$220,000",
    },
    {
      name: "The Whistler Plan",
      specs: "2 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80",
      link: "/plans/whistler",
      price: "$210,000",
    },
  ];

  // Additional floor plans - adding price
  const additionalFloorPlans = [
    {
      name: "The Pine Plan",
      specs: "Studio, 1 Bath",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80",
      link: "/plans/pine",
      price: "$150,000",
    },
    {
      name: "The Redwood Plan",
      specs: "2 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80",
      link: "/plans/redwood",
      price: "$260,000",
    },
    {
      name: "The Palm Plan",
      specs: "1 Bed, 2 Bath",
      image: "https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?auto=format&fit=crop&w=600&q=80",
      link: "/plans/palm",
      price: "$200,000",
    },
    {
      name: "The Beech Plan",
      specs: "2 Bed, 2 Bath",
      image: "https://images.unsplash.com/photo-1503174971373-b1f69a8bdbc7?auto=format&fit=crop&w=600&q=80",
      link: "/plans/beech",
      price: "$295,000",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "From start to finish, Alto Builders guided us through the entire ADU process. The final result is stunning - a beautiful space that adds value and versatility to our property.",
      author: "Sarah Johnson",
      location: "Los Angeles, CA",
    },
    {
      quote: "The team at Alto Builders was professional, responsive, and delivered our ADU on time and within budget. Their attention to detail is impressive.",
      author: "Michael Chen",
      location: "Woodland Hills, CA",
    },
    {
      quote: "We love our new ADU! Alto Builders made what seemed like a complicated process so straightforward. Their expertise is unmatched.",
      author: "Jessica Rodriguez",
      location: "Ventura County, CA",
    },
  ];
  
  // Animation states
  const [scrollY, setScrollY] = useState(0);
  
  // Refs for sections we want to animate
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  
  // Handler for smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
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
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <HeroSection 
        title="YOUR GREATER LOS ANGELES ADU BUILDERS"
        subtitle="Start your building journey with ALTO here"
        backgroundImage="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1920&q=80"
        buttonText="START YOUR BUILD"
        showScrollIndicator={true}
        onScrollDown={() => scrollToSection('explore-section')}
      />

      <section id="explore-section" className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Begin Your ADU Journey</h2>
            <p className="section-subtitle mx-auto">
              Building an ADU can oftentimes be a stressful and confusing process. We're here to make it as clear, efficient, and on budget as possible. Start exploring our pages below to understand more information around costs, design, and regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/adu-basics" className="block">
              <InfoCard 
                title="ADU Basics" 
                description="Begin here to explore the fundamentals of building your own ADU."
                icon={<BookOpen size={24} />}
              />
            </Link>
            <Link to="/adu-costs" className="block">
              <InfoCard 
                title="ADU Costs" 
                description="Gain insight into the cost breakdown of building an ADU."
                icon={<DollarSign size={24} />}
              />
            </Link>
            <Link to="/city-regulations" className="block">
              <InfoCard 
                title="City Regulations" 
                description="Cities love rules. Check your city's regulations around ADUs here."
                icon={<FileText size={24} />}
              />
            </Link>
            <Link to="/design" className="block">
              <InfoCard 
                title="Design" 
                description="Choose from one of our expertly pre-designed packages."
                icon={<Ruler size={24} />}
              />
            </Link>
            <Link to="/process" className="block">
              <InfoCard 
                title="Our Process" 
                description="Learn about our meticulous construction process powered by BuilderTrend."
                icon={<Calendar size={24} />}
              />
            </Link>
            <Link to="/floor-plans" className="block">
              <InfoCard 
                title="Floor Plans" 
                description="Browse our library of floor plans or meet a design engineer to build yours."
                icon={<Home size={24} />}
              />
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary">
              Request Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <section id="floor-plans-section" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Floor Plans</h2>
            <p className="section-subtitle mx-auto">
              Take a look at our floor plans. Building an ADU starts with the right inspiration. Explore some of our favorite floor plans to see the endless possibilities for your own space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {floorPlans.map((plan, index) => (
              <FloorPlanCard 
                key={index} 
                name={plan.name} 
                specs={plan.specs} 
                image={plan.image} 
                link={plan.link}
                price={plan.price}
              />
            ))}
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFloorPlans.map((plan, index) => (
              <FloorPlanCard 
                key={index} 
                name={plan.name} 
                specs={plan.specs} 
                image={plan.image} 
                link={plan.link}
                price={plan.price}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/floor-plans" className="btn-secondary flex items-center justify-center mx-auto w-fit">
              All Floor Plans <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Building an ADU has never been easier!</h2>
            <p className="section-subtitle mx-auto">
              Interest in ADU projects has skyrocketed, as homeowners look to maximize their property's potential. ADUs offer versatile solutions—whether it's generating rental income, providing space for family members, or creating flexible living areas. Explore how our clients have transformed their properties with beautifully designed ADUs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Build an ADU?</h2>
            <p className="section-subtitle mx-auto">
              Building an ADU offers numerous benefits for homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard 
              title="Relaxed Setbacks" 
              description="Makes more of your property available for building."
              icon={<Ruler size={24} />}
            />
            <InfoCard 
              title="No Parking Requirements" 
              description="Enables you to rent your unit with a parking spot."
              icon={<Map size={24} />}
            />
            <InfoCard 
              title="Reduced City Fees" 
              description="Enjoy reduced construction & plan check fees."
              icon={<DollarSign size={24} />}
            />
            <InfoCard 
              title="Multiple ADUs" 
              description="Build up to 8 ADUs on a multifamily lot and up to 3 on a single family lot."
              icon={<Building size={24} />}
            />
            <InfoCard 
              title="Faster Approvals" 
              description="Cities have accelerated their approval process for permits."
              icon={<Zap size={24} />}
            />
            <InfoCard 
              title="Add Square Footage" 
              description="Increase the value of your home through additional square footage."
              icon={<Home size={24} />}
            />
          </div>

          <div className="mt-12 text-center">
            <Link to="/adu-benefits" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">ADU Contractor Serving Greater Los Angeles & Ventura County</h2>
            <p className="section-subtitle mx-auto">
              Alto Builders is your trusted ADU contractor in Los Angeles & Ventura County, offering full design, permit, and build services. Click below to see our proudly served service areas.
            </p>
            <div className="mt-8 flex justify-center gap-6">
              <Link to="/locations" className="btn-primary">
                Our Service Area
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              Hear from homeowners who have transformed their properties with Alto Builders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      <section 
        ref={aboutSectionRef}
        className="py-20 bg-alto-light-gray"
      >
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="section-title">Los Angeles & Ventura County ADU Specialists</h2>
            <p className="font-semibold text-xl text-alto-blue mb-6">We are ALTO BUILDERS</p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg card-shadow text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" 
                    alt="Paul Manfredi" 
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-alto-accent"
                  />
                  <h3 className="text-xl font-semibold text-alto-blue mb-1">Paul Manfredi</h3>
                  <p className="text-alto-accent mb-4">Owner</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg card-shadow text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
                    alt="Simon Manfredi" 
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-alto-accent"
                  />
                  <h3 className="text-xl font-semibold text-alto-blue mb-1">Simon Manfredi</h3>
                  <p className="text-alto-accent mb-4">Owner</p>
                </div>
              </div>
              
              <div className="mt-10 bg-white p-8 rounded-lg card-shadow text-center">
                <h3 className="text-2xl font-semibold text-alto-blue mb-4">Want to learn more about your ADU Project?</h3>
                <p className="text-alto-dark-gray mb-6">We'd love to help</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/contact" className="btn-primary">
                    Learn More
                  </Link>
                  <Link to="/floor-plans" className="btn-secondary">
                    Browse Floor Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Ready to Start Your ADU Journey?"
        subtitle="Schedule a free consultation with our team to discuss your project"
        buttonText="Get Your Free Site Assessment"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Index;
