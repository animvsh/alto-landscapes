
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';

const AccessibilityStatement = () => {
  return (
    <PageTransition>
      <Navbar />
      <HeroSection
        title="ACCESSIBILITY STATEMENT"
        subtitle="Our commitment to providing an inclusive digital experience"
        backgroundImage="https://images.unsplash.com/photo-1586455994666-011dbebd84d3?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-alto-blue text-xl font-semibold mb-4">Effective Date: January 16, 2025</h2>
          
          <p className="mb-6">
            Alto Builders is committed to ensuring that our website and services are accessible to all individuals, 
            including those with disabilities. We strive to provide an inclusive and user-friendly experience for all 
            visitors and continuously work to enhance the accessibility of our digital platforms.
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-3">Our Commitment</h3>
              <p>
                We are dedicated to meeting the accessibility standards outlined by the Web Content Accessibility Guidelines 
                (WCAG) 2.1 at the AA level, which provide guidance on making web content more accessible to individuals with 
                a wide range of disabilities.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Accessibility Features</h3>
              <p className="mb-3">Our efforts to ensure accessibility include:</p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Keyboard Navigation:</strong> Our website is designed to be fully navigable using a keyboard.</li>
                <li><strong>Text Alternatives:</strong> Images and other non-text elements include alternative text (alt text) where applicable.</li>
                <li><strong>Readable Content:</strong> We use clear and simple language to make our content more understandable.</li>
                <li><strong>Contrast Ratios:</strong> We maintain high contrast between text and background to improve readability for individuals with visual impairments.</li>
                <li><strong>Responsive Design:</strong> Our website is optimized for various devices and screen sizes, including assistive technologies like screen readers.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Ongoing Efforts</h3>
              <p>
                We recognize that accessibility is an ongoing process, and we are continuously working to identify 
                and address barriers to accessibility on our website.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Need Assistance?</h3>
              <p>
                If you encounter any accessibility issues or have difficulty using any part of our website, 
                we are here to help. Please contact us with your feedback or questions, and we will make 
                every effort to assist you and resolve the issue promptly.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
              <p>If you need assistance or have suggestions to improve the accessibility of our website, please reach out to us:</p>
              <p className="mt-3">
                <strong>Phone:</strong> <a href="tel:8188077587" className="text-alto-blue hover:underline">818-807-7587</a><br />
                <strong>Email:</strong> <a href="mailto:simon@altobuilds.com" className="text-alto-blue hover:underline">simon@altobuilds.com</a>
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Third-Party Content</h3>
              <p>
                While we aim to ensure accessibility across our website, some third-party content, links, 
                or integrations may not fully comply with accessibility standards. We encourage you to contact 
                those third-party providers directly for more information.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Feedback</h3>
              <p>
                We welcome your feedback on the accessibility of our website. Your input is invaluable 
                in helping us create a better experience for everyone.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </PageTransition>
  );
};

export default AccessibilityStatement;
