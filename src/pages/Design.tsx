
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import FloorPlanCard from '../components/FloorPlanCard';
import { ArrowRight, Home, Book } from 'lucide-react';

const Design = () => {
  // Featured floor plans data
  const featuredFloorPlans = [
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
      specs: "Studio, 1 Bath",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80",
      link: "/plans/whistler",
      price: "$210,000",
    },
    {
      name: "The Pine Plan",
      specs: "2 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80",
      link: "/plans/pine",
      price: "$150,000",
    },
    {
      name: "The Redwood Plan",
      specs: "1 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80",
      link: "/plans/redwood",
      price: "$260,000",
    },
    {
      name: "The Palm Plan",
      specs: "2 Bed, 2 Bath",
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
    {
      name: "The Bluff Plan",
      specs: "1 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=600&q=80",
      link: "/plans/bluff",
      price: "$210,000",
    },
    {
      name: "The Shore Plan",
      specs: "1 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=600&q=80",
      link: "/plans/shore",
      price: "$190,000",
    },
    {
      name: "The Rosewood Plan",
      specs: "1 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80",
      link: "/plans/rosewood",
      price: "$200,000",
    },
    {
      name: "The Spruce Plan",
      specs: "Studio, 1 Bath",
      image: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=600&q=80",
      link: "/plans/spruce",
      price: "$140,000",
    },
    {
      name: "The Willow Plan",
      specs: "Studio, 1 Bath",
      image: "https://images.unsplash.com/photo-1560185008-a33f5c7b1fcb?auto=format&fit=crop&w=600&q=80",
      link: "/plans/willow",
      price: "$145,000",
    },
    {
      name: "The Oak Plan",
      specs: "1 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5058?auto=format&fit=crop&w=600&q=80",
      link: "/plans/oak",
      price: "$210,000",
    },
    {
      name: "The Fir Plan",
      specs: "1 Bed, 1 Bath",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=600&q=80",
      link: "/plans/fir",
      price: "$180,000",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="ADU DESIGNS"
        subtitle="Choose an ADU design you'll love"
        backgroundImage="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Choose an ADU design you'll love</h2>
            <p className="section-subtitle mx-auto">
              Are you ready to bring your accessory dwelling unit design to life? At Alto Builders, we're here to guide you through the process of designing your perfect ADU. Our team of experts has curated an extensive selection of floor plans, interior design packages, and preferred home features to help you create a space that's both functional and stylish.
            </p>
            <p className="mt-4 text-alto-dark-gray max-w-4xl mx-auto">
              From selecting the right materials to understanding the ideal size for your ADU, we've got you covered. As a design build ADU contractor, we understand the importance of balancing design with budget and real-world buildability. Let us help you turn your vision into a reality with our experienced ADU design team.
            </p>
          </div>

          <div className="bg-alto-light-gray p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-semibold text-alto-blue mb-6 text-center">Pick where you want to Start</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
                <Home size={48} className="mx-auto mb-4 text-alto-accent" />
                <h4 className="text-xl font-semibold text-alto-blue mb-2">Floor Plans</h4>
                <p className="text-alto-dark-gray mb-4">Looking for ADU floor plans? Explore our standard plan library, or we can create a fully custom design just for you.</p>
                <Link to="/plans" className="text-alto-accent font-medium hover:underline">Floor Plans</Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
                <Book size={48} className="mx-auto mb-4 text-alto-accent" />
                <h4 className="text-xl font-semibold text-alto-blue mb-2">Interior Design Packages</h4>
                <p className="text-alto-dark-gray mb-4">Our ADU prices include pre-selected interior design packages, making it easy for you to choose the perfect look for your ADU.</p>
                <Link to="/design/interior" className="text-alto-accent font-medium hover:underline">The Lookbook</Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
                <Home size={48} className="mx-auto mb-4 text-alto-accent" />
                <h4 className="text-xl font-semibold text-alto-blue mb-2">Home Features</h4>
                <p className="text-alto-dark-gray mb-4">Discover the features included in our standard proposals and construction bids (yes, we've thought of everything—even the kitchen sink).</p>
                <Link to="/design/features" className="text-alto-accent font-medium hover:underline">Build Features</Link>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-alto-blue mb-6 text-center">Build-Ready Floor Plans</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredFloorPlans.slice(0, 8).map((plan, index) => (
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
            
            <div className="mt-8 text-center">
              <Link to="/plans" className="btn-secondary flex items-center justify-center mx-auto w-fit">
                See All Floor Plans <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <p className="text-alto-dark-gray mb-4">
              Alto ADU is here to help you create the ideal accessory dwelling unit for your property. Whether you're looking to design a custom floor plan to match your vision or add multiple units by attaching or stacking them, we've got you covered. Contact us today to discuss your ideas and bring your dream project to life. Our talented in-house drafting team is ready and excited to work on your custom ADU design.
            </p>
            <p className="text-alto-dark-gray">
              For inspiration, check out our plans for 1 Bedroom, 2 Bedroom, 3 Bedroom, 4 Bedroom, and Two-Story ADUs.
            </p>
            <div className="mt-6 text-center">
              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-alto-blue mb-6">What is an ADU Designer? Do I need one?</h3>
            <div className="space-y-4 text-alto-dark-gray">
              <p>
                In the world of accessory dwelling units (ADUs), the term "ADU designer" covers a wide range of professionals, each offering different skills and expertise. Unlike traditional roles with more defined qualifications, ADU design is a diverse field. You might come across the term "ADU specialist," which can sometimes be earned with minimal testing. However, the true mark of an ADU designer's ability lies not in certifications but in their experience—handling the complexities of ADU projects on a daily basis.
              </p>
              <p>
                An experienced ADU designer specializes in creating and planning ADUs, understanding the unique challenges and regulations involved. These professionals excel in optimizing limited spaces, ensuring compliance with local zoning laws, and designing ADUs that balance comfort, functionality, and aesthetics. They work closely with homeowners to create custom designs tailored to specific needs—whether for rental income, multigenerational living, or increasing property value. From concept development and 3D renderings to construction drawings and material selections, ADU designers ensure that each project aligns with the homeowner's vision, budget, and regulatory requirements.
              </p>
              <p className="font-semibold text-alto-blue">
                At Alto ADU, we go beyond design—we are full-service ADU design-build experts.
              </p>
              <p>
                This distinction is important in a field where theoretical knowledge isn't enough without hands-on experience. Our integrated approach covers design, permitting, and construction, providing a seamless process from concept to completion. This model not only simplifies the process but also ensures a higher level of accountability and efficiency compared to standalone designers or architects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-alto-blue py-16 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Want to learn more about your ADU Project?</h3>
            <p className="text-white/80 mb-8 text-lg">
              We'd love to help you understand your options and find the perfect ADU solution for your property.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-accent">Learn More</Link>
              <Link to="/plans" className="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-6 rounded-full transition-all duration-300">
                Browse Floor Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Ready to Design Your Perfect ADU?"
        subtitle="Let's create a space that perfectly suits your needs and lifestyle"
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Design;
