
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import TeamMemberCard from '../components/TeamMemberCard';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Paul Manfredi",
      position: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "With over 15 years of experience in the construction industry, Paul leads the Alto Builders team with a passion for innovative design and exceptional client service.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Simon Manfredi",
      position: "Co-Founder & Operations Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "Simon brings 15+ years of project management expertise to ensure every Alto Builders project is delivered on time and within budget.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Maria Rodriguez",
      position: "Lead Architect",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "Maria's innovative designs have helped countless homeowners maximize space and functionality in their ADUs while maintaining aesthetic appeal.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "David Chen",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80",
      bio: "With a keen eye for detail and strong communication skills, David ensures smooth project execution from start to finish.",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection 
        title="ABOUT ALTO BUILDERS"
        subtitle="We specialize in designing and building premium ADUs across Greater Los Angeles"
        backgroundImage="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="section-title">Our Story</h2>
              <p className="text-alto-dark-gray mb-6">
                Founded in 2015 by brothers Paul and Simon Manfredi, Alto Builders was born from a shared vision to transform the ADU building experience in Greater Los Angeles.
              </p>
              <p className="text-alto-dark-gray mb-6">
                With backgrounds in architecture and construction management, the Manfredi brothers recognized a growing need for high-quality, custom ADUs that could be built efficiently and affordably without compromising on design or craftsmanship.
              </p>
              <p className="text-alto-dark-gray">
                Today, Alto Builders has completed over 100 successful ADU projects across Los Angeles and Ventura County, earning a reputation for excellence, reliability, and exceptional client service.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80" 
                alt="Alto Builders Headquarters" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg card-shadow">
              <div className="text-alto-accent mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Quality Craftsmanship</h3>
              <p className="text-alto-dark-gray">
                We never compromise on quality. From materials to finishes, we ensure every detail meets our exacting standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg card-shadow">
              <div className="text-alto-accent mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Client-Centered Approach</h3>
              <p className="text-alto-dark-gray">
                Your vision drives our work. We listen carefully to understand your needs and deliver solutions that exceed expectations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg card-shadow">
              <div className="text-alto-accent mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Transparency</h3>
              <p className="text-alto-dark-gray">
                Clear communication and straightforward pricing ensure you're informed and comfortable throughout the process.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg card-shadow">
              <div className="text-alto-accent mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Innovation</h3>
              <p className="text-alto-dark-gray">
                We stay at the forefront of design trends and construction techniques to deliver modern, efficient ADUs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg card-shadow">
              <div className="text-alto-accent mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Sustainability</h3>
              <p className="text-alto-dark-gray">
                We prioritize eco-friendly materials and energy-efficient designs to minimize environmental impact.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg card-shadow">
              <div className="text-alto-accent mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-xl font-semibold text-alto-blue mb-3">Community</h3>
              <p className="text-alto-dark-gray">
                As local builders, we're committed to strengthening our communities through thoughtful development.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle mx-auto">
              The dedicated professionals behind Alto Builders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index} 
                name={member.name} 
                position={member.position} 
                image={member.image} 
                bio={member.bio}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>

      <CallToActionSection 
        title="Ready to Work With Our Team?"
        subtitle="Schedule a consultation to discuss your ADU project"
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />

      <Footer />
    </>
  );
};

export default About;
