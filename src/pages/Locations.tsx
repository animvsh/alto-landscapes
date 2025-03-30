
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import ServiceAreaGrid from '../components/locations/ServiceAreaGrid';
import LocalExpertiseSection from '../components/locations/LocalExpertiseSection';
import PlanningRegulationsSection from '../components/locations/PlanningRegulationsSection';

const Locations = () => {
  const serviceAreas = [
    {
      region: "San Fernando Valley",
      cities: [
        { name: "Woodland Hills", link: "/locations/woodland-hills" },
        { name: "Sherman Oaks", link: "/locations/sherman-oaks" },
        { name: "Studio City", link: "/locations/studio-city" },
        { name: "Encino", link: "/locations/encino" },
        { name: "Tarzana", link: "/locations/tarzana" },
        { name: "Northridge", link: "/locations/northridge" },
        { name: "Reseda", link: "/locations/reseda" },
      ]
    },
    {
      region: "West Los Angeles",
      cities: [
        { name: "Santa Monica", link: "/locations/santa-monica" },
        { name: "Venice", link: "/locations/venice" },
        { name: "Brentwood", link: "/locations/brentwood" },
        { name: "Pacific Palisades", link: "/locations/pacific-palisades" },
        { name: "Westwood", link: "/locations/westwood" },
        { name: "Century City", link: "/locations/century-city" },
        { name: "Mar Vista", link: "/locations/mar-vista" },
      ]
    },
    {
      region: "Central Los Angeles",
      cities: [
        { name: "Hollywood", link: "/locations/hollywood" },
        { name: "Silver Lake", link: "/locations/silver-lake" },
        { name: "Echo Park", link: "/locations/echo-park" },
        { name: "Los Feliz", link: "/locations/los-feliz" },
        { name: "Koreatown", link: "/locations/koreatown" },
        { name: "Downtown LA", link: "/locations/downtown-la" },
      ]
    },
    {
      region: "Ventura County",
      cities: [
        { name: "Thousand Oaks", link: "/locations/thousand-oaks" },
        { name: "Simi Valley", link: "/locations/simi-valley" },
        { name: "Camarillo", link: "/locations/camarillo" },
        { name: "Oxnard", link: "/locations/oxnard" },
        { name: "Ventura", link: "/locations/ventura" },
      ]
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="OUR SERVICE AREAS"
        subtitle="Alto Builders proudly serves Greater Los Angeles and Ventura County"
        backgroundImage="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=1920&q=80"
      />

      <ServiceAreaGrid serviceAreas={serviceAreas} />
      <LocalExpertiseSection />
      <PlanningRegulationsSection />

      <CallToActionSection 
        title="Serving Your Neighborhood"
        subtitle="Schedule a consultation to discuss ADU opportunities in your specific location"
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Locations;
