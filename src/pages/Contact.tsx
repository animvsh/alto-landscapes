
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import PageTransition from '../components/PageTransition';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import SocialLinks from '../components/contact/SocialLinks';
import ContactFAQ from '../components/contact/ContactFAQ';

const Contact = () => {
  return (
    <PageTransition>
      <Navbar />
      <ContactHero />

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/5">
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-alto-dark-gray mb-8">
                We're here to answer your questions and discuss your ADU project. Complete the form or contact us directly using the information below.
              </p>
              
              <ContactInfo />
              <SocialLinks />
            </div>
            
            <div className="lg:w-3/5">
              <ContactForm />
              <div className="mt-4 p-4 bg-blue-50 text-blue-700 rounded-md text-sm">
                <p><strong>Note:</strong> To enable actual email sending, the EmailJS credentials need to be configured in the ContactForm component.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFAQ />

      <Footer />
    </PageTransition>
  );
};

export default Contact;
