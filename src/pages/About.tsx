
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CallToActionSection from '../components/CallToActionSection';
import StorySection from '../components/about/StorySection';
import ValuesSection from '../components/about/ValuesSection';
import TeamSection from '../components/about/TeamSection';
import AduGuideSection from '../components/about/AduGuideSection';
import PageTransition from '../components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <Navbar />
      <HeroSection 
        title="ABOUT ALTO BUILDERS"
        subtitle="We specialize in designing and building premium ADUs across Greater Los Angeles"
        backgroundImage="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <StorySection />
          <ValuesSection />
          <TeamSection />
          <AduGuideSection />
        </div>
      </section>

      <CallToActionSection 
        title="Ready to Work With Our Team?"
        subtitle="Schedule a consultation to discuss your ADU project"
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />

      <Footer />
    </PageTransition>
  );
};

export default About;
