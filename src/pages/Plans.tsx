
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import FloorPlanCategory from '../components/FloorPlanCategory';
import { Link } from 'react-router-dom';

const Plans = () => {
  const studioPlans = [
    {
      name: "Studio 1",
      specs: "Studio | 1 BA",
      price: "$150,000",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Studio 2",
      specs: "Studio | 1 BA",
      price: "$120,000",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Studio 3",
      specs: "Studio | 1 BA",
      price: "$140,000",
      image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const oneBedroomPlans = [
    {
      name: "One Bedroom 1",
      specs: "1 BD | 1 BA",
      price: "$180,000",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "One Bedroom 2",
      specs: "1 BD | 1 BA",
      price: "$200,000",
      image: "https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "One Bedroom 3",
      specs: "1 BD | 1 BA",
      price: "$200,000",
      image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "One Bedroom 4",
      specs: "1 BD | 1 BA",
      price: "$240,000",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "One Bedroom 5",
      specs: "1 BD | 1 BA",
      price: "$210,000",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "One Bedroom 6",
      specs: "1 BD | 1 BA",
      price: "$180,000",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const twoBedroomPlans = [
    {
      name: "Two Bedroom 1",
      specs: "2 BD | 2.5 BA",
      price: "$540,000",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Two Bedroom 2",
      specs: "2 BD | 2 BA",
      price: "$320,000",
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Two Bedroom 3",
      specs: "2 BD | 1 BA",
      price: "$220,000",
      image: "https://images.unsplash.com/photo-1630699144867-37acfc0bf63e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Two Bedroom 4",
      specs: "2 BD | 1 BA",
      price: "$210,000",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Two Bedroom 5",
      specs: "2 BD | 2 BA",
      price: "$355,000",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Two Bedroom 6",
      specs: "2 BD | 2 BA",
      price: "$260,000",
      image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="ADU PLANS & PRICING"
        subtitle="Explore our collection of ready-to-build ADU floor plans"
        backgroundImage="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Accessory Dwelling Unit Floor Plans</h2>
            <p className="section-subtitle mx-auto">
              Explore our collection of ready-to-build ADU floor plans below. Simply click on any plan to view detailed pricing. 
              Whether you're looking to customize one of our existing blueprints or dreaming of a fully custom ADU design, we've got you covered.
            </p>
            <p className="mt-4 text-alto-dark-gray max-w-4xl mx-auto">
              Our in-house design team specializes in creating plans that integrate seamlessly with your main residence, 
              ensuring your ADU's exterior complements your property. From minor modifications to completely bespoke designs, 
              including stacked ADUs and guest house layouts, we offer a wide range of options to bring your vision to life.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a href="#studio-plans" className="btn-secondary">Studio Plans</a>
              <a href="#one-bedroom-plans" className="btn-secondary">One Bedroom Plans</a>
              <a href="#two-bedroom-plans" className="btn-secondary">Two Bedroom Plans</a>
              <a href="#custom-plans" className="btn-secondary">Custom Plans</a>
            </div>
          </div>

          <div id="studio-plans">
            <FloorPlanCategory title="Studio Plans" plans={studioPlans} />
          </div>

          <div id="one-bedroom-plans">
            <FloorPlanCategory title="One Bedroom Plans" plans={oneBedroomPlans} />
          </div>

          <div id="two-bedroom-plans">
            <FloorPlanCategory title="Two Bedroom Plans" plans={twoBedroomPlans} />
          </div>

          <div id="custom-plans" className="bg-alto-light-gray p-8 rounded-lg mt-16">
            <h3 className="text-2xl font-semibold text-alto-blue mb-4">Need a Custom ADU Floor Plan?</h3>
            <p className="text-alto-dark-gray mb-6">
              Looking to customize an accessory dwelling unit (ADU) to perfectly fit your property or expand your project 
              with multiple attached or stacked units? We're experienced ADU builders who can bring your vision to life! 
              Whether you want to modify one of our existing ADU plans or create a fully custom design, our expert in-house 
              drafting team is here to help. Contact us today to start planning your personalized ADU project!
            </p>
            <Link to="/contact" className="btn-primary">Start Now</Link>
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
        title="Find Your Perfect ADU Plan Today"
        subtitle="Let's discuss which plan best suits your property and lifestyle needs"
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Plans;
