
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import PageTransition from '../components/PageTransition';
import TeamGrid from '../components/team/TeamGrid';
import TeamValueSection from '../components/team/TeamValueSection';
import TeamHiringSection from '../components/team/TeamHiringSection';
import CallToActionSection from '../components/CallToActionSection';
import FounderDuoSection from '../components/team/FounderDuoSection';

const Team = () => {
  return (
    <PageTransition>
      <Navbar />
      <HeroSection 
        title="MEET OUR TEAM"
        subtitle="The dedicated professionals behind Alto Builders' success"
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <FounderDuoSection />
          <TeamGrid />
          <TeamValueSection />
          <TeamHiringSection />
        </div>
      </section>
      
      <CallToActionSection 
        title="Want to Work With Our Team?"
        subtitle="Schedule a consultation to discuss your project with our experts"
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
      <Footer />
    </PageTransition>
  );
};

export default Team;
