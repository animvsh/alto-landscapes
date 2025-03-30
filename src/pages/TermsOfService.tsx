
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';

const TermsOfService = () => {
  return (
    <PageTransition>
      <Navbar />
      <HeroSection
        title="TERMS OF SERVICE"
        subtitle="The terms that govern your use of our website and services"
        backgroundImage="https://images.unsplash.com/photo-1572177215152-32f247303126?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-alto-blue text-xl font-semibold mb-4">Effective Date: January 16, 2025</h2>
          
          <p className="mb-6">
            Welcome to the website of Alto Builders ("we," "us," or "our"). By accessing or using our website and services, 
            you agree to comply with and be bound by the following Terms and Conditions. Please read these terms carefully 
            before using our services. If you do not agree with any part of these terms, you must not use our website or services.
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-3">1. Services Provided</h3>
              <p>
                Alto Builders specializes in offering design, permit, and build services for Accessory Dwelling Units (ADUs) 
                in Los Angeles and Ventura County. All services are subject to availability and mutual agreement.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">2. Eligibility</h3>
              <p>
                To use our website or services, you must be at least 18 years old and legally capable of entering into binding contracts.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">3. Use of Website</h3>
              <p className="mb-3">You agree to use our website solely for lawful purposes. You must not:</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Interfere with or disrupt the website's functionality.</li>
                <li>Use the website for fraudulent or malicious purposes.</li>
                <li>Copy, reproduce, or distribute any content without prior written consent.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">4. Intellectual Property</h3>
              <p>
                All content on our website, including text, images, logos, and designs, is the property of Alto Builders 
                or its licensors and is protected by copyright, trademark, and other intellectual property laws. 
                Unauthorized use is prohibited.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">5. Quotes and Estimates</h3>
              <p>
                Any quotes or estimates provided by Alto Builders are non-binding and subject to change based on 
                project specifics, unforeseen circumstances, or material costs. Final costs will be outlined in a formal contract.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">6. Project Agreements</h3>
              <p>
                All project agreements, including timelines, costs, and deliverables, will be documented in a formal contract. 
                These terms and conditions do not replace or supersede the terms outlined in project-specific contracts.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">7. Limitation of Liability</h3>
              <p>To the fullest extent permitted by law, Alto Builders shall not be liable for any direct, indirect, incidental, or consequential damages arising from:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Your use of or inability to use our website or services.</li>
                <li>Delays or interruptions caused by external factors, such as weather or government regulations.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">8. Third-Party Links</h3>
              <p>
                Our website may include links to third-party websites for informational purposes. 
                Alto Builders is not responsible for the content, policies, or practices of third-party sites.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">9. Privacy</h3>
              <p>
                Your use of our website is subject to our <a href="/privacy-policy" className="text-alto-blue hover:underline">Privacy Policy</a>. 
                Please review it to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">10. Changes to Terms</h3>
              <p>
                We reserve the right to update or modify these Terms and Conditions at any time without prior notice. 
                Changes will take effect immediately upon posting on our website. Your continued use of the website 
                constitutes your acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">11. Governing Law</h3>
              <p>
                These Terms and Conditions are governed by the laws of the State of California. Any disputes arising from 
                these terms or our services shall be subject to the exclusive jurisdiction of the courts located in 
                Los Angeles County, California.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">12. Termination</h3>
              <p>
                We reserve the right to terminate or suspend access to our website or services at our sole discretion, 
                without notice, for conduct that violates these Terms and Conditions or is otherwise harmful to 
                Alto Builders or third parties.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">13. Contact Us</h3>
              <p>If you have any questions or concerns about these Terms and Conditions, please contact us at:</p>
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

export default TermsOfService;
