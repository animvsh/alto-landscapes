
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import FloorPlanCard from '../components/FloorPlanCard';
import InfoCard from '../components/InfoCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialCard from '../components/TestimonialCard';
import { ArrowRight, Home, Ruler, Calendar, Zap, DollarSign, Map, Users } from 'lucide-react';

const Index = () => {
  // This could come from an API in a real app
  const floorPlans = [
    {
      name: "The Yosemite Plan",
      specs: "2 Bed, 2.5 Bath",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
      link: "/plans/yosemite",
    },
    {
      name: "The Glacier Plan",
      specs: "2 Bed, 2 Bath",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
      link: "/plans/glacier",
    },
    {
      name: "The Hickory Plan",
      specs: "2 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=600&q=80",
      link: "/plans/hickory",
    },
  ];

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

  return (
    <>
      <Navbar />
      <HeroSection 
        title="YOUR GREATER LOS ANGELES ADU BUILDERS"
        subtitle="Premium accessory dwelling units designed and built for the modern homeowner."
        backgroundImage="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">ADU Information</h2>
            <p className="section-subtitle mx-auto">
              Everything you need to know about building your ADU
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/adu-basics" className="block">
              <InfoCard 
                title="ADU Basics" 
                description="Understand the fundamentals of building an ADU."
                icon={<Home size={32} />}
              />
            </Link>
            <Link to="/adu-costs" className="block">
              <InfoCard 
                title="ADU Costs" 
                description="Detailed breakdown of costs involved in building an ADU."
                icon={<DollarSign size={32} />}
              />
            </Link>
            <Link to="/city-regulations" className="block">
              <InfoCard 
                title="City Regulations" 
                description="Information on city-specific rules and regulations."
                icon={<Map size={32} />}
              />
            </Link>
            <Link to="/design" className="block">
              <InfoCard 
                title="Design" 
                description="Choose from our pre-designed packages or customize your own."
                icon={<Ruler size={32} />}
              />
            </Link>
            <Link to="/process" className="block">
              <InfoCard 
                title="Our Process" 
                description="Overview of our construction process from start to finish."
                icon={<Calendar size={32} />}
              />
            </Link>
            <Link to="/floor-plans" className="block">
              <InfoCard 
                title="Floor Plans" 
                description="View or customize our ADU floor plans to fit your needs."
                icon={<Home size={32} />}
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

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Floor Plans</h2>
            <p className="section-subtitle mx-auto">
              Explore our floor plans to get inspiration and discover possibilities for your ADU
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {floorPlans.map((plan, index) => (
              <FloorPlanCard 
                key={index} 
                name={plan.name} 
                specs={plan.specs} 
                image={plan.image} 
                link={plan.link} 
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/floor-plans" className="btn-secondary flex items-center justify-center mx-auto w-fit">
              View All Floor Plans <ArrowRight size={16} className="ml-2" />
            </Link>
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
              description="More space for building your ADU with relaxed setback requirements."
              icon={<Ruler size={32} />}
            />
            <InfoCard 
              title="No Parking Requirements" 
              description="Easier rental usage with no additional parking requirements."
              icon={<Map size={32} />}
            />
            <InfoCard 
              title="Reduced City Fees" 
              description="Save on construction and planning with reduced city fees."
              icon={<DollarSign size={32} />}
            />
            <InfoCard 
              title="Multiple ADUs" 
              description="Build up to 8 ADUs on multifamily lots, and up to 3 on single-family lots."
              icon={<Home size={32} />}
            />
            <InfoCard 
              title="Faster Approvals" 
              description="Benefit from expedited permit processes for ADUs."
              icon={<Zap size={32} />}
            />
            <InfoCard 
              title="Add Square Footage" 
              description="Boost your property value by adding significant square footage."
              icon={<Home size={32} />}
            />
          </div>

          <div className="mt-12 text-center">
            <Link to="/adu-benefits" className="btn-secondary">
              Learn More
            </Link>
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

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="section-title">About Alto Builders</h2>
              <p className="text-alto-dark-gray mb-6">
                Alto Builders serves the Greater Los Angeles and Ventura County areas, offering full design → permit → build services. Our mission is to make the ADU process seamless and stress-free.
              </p>
              <p className="text-alto-dark-gray mb-6">
                With over 30 years of combined experience, our team specializes in both standard and custom ADU plans for multigenerational families and real estate investors alike.
              </p>
              <Link to="/about" className="btn-primary inline-block">
                Meet Our Team
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80" 
                alt="Alto Builders Team" 
                className="rounded-lg shadow-lg w-full"
              />
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
