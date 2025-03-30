
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <Navbar />
      <HeroSection
        title="PRIVACY POLICY"
        subtitle="How we collect, use, and protect your information"
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-alto-blue text-xl font-semibold mb-4">Effective Date: January 16, 2025</h2>
          
          <p className="mb-6">
            At Alto Builders, we are committed to protecting your privacy and ensuring that your personal information is handled responsibly. 
            This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our services, including 
            our website and communication channels.
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-3">1. Information We Collect</h3>
              <p className="mb-3">We may collect the following types of personal information:</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and mailing address.</li>
                <li><strong>Project-Related Information:</strong> Property address, project details, design preferences, and relevant documents (e.g., permits).</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
                <li><strong>Communication Records:</strong> Emails, phone calls, or inquiries made through our contact forms or other communication channels.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">2. How We Use Your Information</h3>
              <p className="mb-3">The information we collect is used to:</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide design, permit, and build services for your ADU project.</li>
                <li>Communicate with you regarding project updates, consultations, and other relevant services.</li>
                <li>Improve our services and website functionality.</li>
                <li>Send promotional materials and special offers (you can opt out at any time).</li>
                <li>Comply with legal and regulatory requirements.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">3. Sharing Your Information</h3>
              <p className="mb-3">
                We do not sell, rent, or share your personal information with third parties for marketing purposes. 
                However, we may share your information with:
              </p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist with design, permits, construction, or website hosting.</li>
                <li><strong>Legal Requirements:</strong> If required to comply with legal obligations or protect our rights.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">4. Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your personal information from unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission or storage is 100% secure, and 
                we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">5. Cookies and Tracking Technologies</h3>
              <p>
                Our website may use cookies and similar technologies to enhance your browsing experience. 
                These technologies collect information about your usage patterns to improve website functionality 
                and deliver targeted content. You can manage or disable cookies through your browser settings.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">6. Your Privacy Rights</h3>
              <p className="mb-3">
                If you are a resident of California or other regions with applicable privacy laws, you may have the following rights:
              </p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt out of receiving promotional communications.</li>
                <li>Request information about the categories of personal data we collect and share.</li>
              </ul>
              
              <p className="mt-3">To exercise these rights, please contact us using the details below.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">7. Third-Party Links</h3>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                or content of these sites. We encourage you to review their privacy policies before providing personal information.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">8. Updates to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                We encourage you to review this page regularly for updates.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">9. Contact Us</h3>
              <p>If you have any questions or concerns about this Privacy Policy or how we handle your information, please contact us at:</p>
              <p className="mt-3">
                <strong>Phone:</strong> <a href="tel:8188077587" className="text-alto-blue hover:underline">818-807-7587</a><br />
                <strong>Email:</strong> <a href="mailto:simon@altobuilds.com" className="text-alto-blue hover:underline">simon@altobuilds.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </PageTransition>
  );
};

export default PrivacyPolicy;
