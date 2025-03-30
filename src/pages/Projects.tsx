
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import ProjectCard from '../components/ProjectCard';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Modern Woodland Hills ADU",
      location: "Woodland Hills, CA",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      link: "/projects/woodland-hills",
      category: "modern",
    },
    {
      title: "Contemporary Venice Beach ADU",
      location: "Venice Beach, CA",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      link: "/projects/venice-beach",
      category: "contemporary",
    },
    {
      title: "Minimalist Studio City ADU",
      location: "Studio City, CA",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
      link: "/projects/studio-city",
      category: "minimalist",
    },
    {
      title: "Traditional Pasadena ADU",
      location: "Pasadena, CA",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80",
      link: "/projects/pasadena",
      category: "traditional",
    },
    {
      title: "Mid-Century Glendale ADU",
      location: "Glendale, CA",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
      link: "/projects/glendale",
      category: "mid-century",
    },
    {
      title: "Urban Loft Silver Lake ADU",
      location: "Silver Lake, CA",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
      link: "/projects/silver-lake",
      category: "urban",
    },
    {
      title: "Craftsman Echo Park ADU",
      location: "Echo Park, CA",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80",
      link: "/projects/echo-park",
      category: "craftsman",
    },
    {
      title: "Mediterranean Santa Monica ADU",
      location: "Santa Monica, CA",
      image: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=800&q=80",
      link: "/projects/santa-monica",
      category: "mediterranean",
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <Navbar />
      <HeroSection 
        title="OUR PROJECTS"
        subtitle="Explore our portfolio of premium ADUs across Greater Los Angeles"
        backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mx-auto">
              Discover the quality and craftsmanship of our custom ADUs
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-12">
            <button 
              className={`px-6 py-2 mx-2 mb-3 rounded-full transition-colors ${filter === 'all' ? 'bg-alto-blue text-white' : 'bg-white text-alto-dark-gray hover:bg-alto-light-gray'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-6 py-2 mx-2 mb-3 rounded-full transition-colors ${filter === 'modern' ? 'bg-alto-blue text-white' : 'bg-white text-alto-dark-gray hover:bg-alto-light-gray'}`}
              onClick={() => setFilter('modern')}
            >
              Modern
            </button>
            <button 
              className={`px-6 py-2 mx-2 mb-3 rounded-full transition-colors ${filter === 'contemporary' ? 'bg-alto-blue text-white' : 'bg-white text-alto-dark-gray hover:bg-alto-light-gray'}`}
              onClick={() => setFilter('contemporary')}
            >
              Contemporary
            </button>
            <button 
              className={`px-6 py-2 mx-2 mb-3 rounded-full transition-colors ${filter === 'minimalist' ? 'bg-alto-blue text-white' : 'bg-white text-alto-dark-gray hover:bg-alto-light-gray'}`}
              onClick={() => setFilter('minimalist')}
            >
              Minimalist
            </button>
            <button 
              className={`px-6 py-2 mx-2 mb-3 rounded-full transition-colors ${filter === 'traditional' ? 'bg-alto-blue text-white' : 'bg-white text-alto-dark-gray hover:bg-alto-light-gray'}`}
              onClick={() => setFilter('traditional')}
            >
              Traditional
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                title={project.title} 
                location={project.location} 
                image={project.image} 
                link={project.link} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-alto-light-gray">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="section-title">Our Approach</h2>
              <p className="text-alto-dark-gray mb-6">
                Every Alto Builders project begins with a thorough understanding of our client's vision, lifestyle, and property. We believe that successful ADUs harmoniously blend form and function, creating spaces that are both beautiful and practical.
              </p>
              <p className="text-alto-dark-gray mb-6">
                Our design team works closely with clients to develop custom solutions that maximize space, optimize natural light, and create seamless indoor-outdoor connections. We pay meticulous attention to both architectural details and interior finishes to ensure a cohesive, high-quality result.
              </p>
              <p className="text-alto-dark-gray">
                From concept to completion, we maintain transparent communication and rigorous quality control, resulting in ADUs that enhance both property value and lifestyle.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1618220179428-22790b485390?auto=format&fit=crop&w=800&q=80" 
                alt="Alto Builders Design Process" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Inspired By Our Projects?"
        subtitle="Let's discuss how we can create a custom ADU for your property"
        buttonText="Start Your Project"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default Projects;
