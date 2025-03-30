
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-alto-blue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold flex items-center mb-6">
              <span className="mr-1">A|B</span>
              <div className="flex flex-col text-sm ml-2 leading-tight">
                <span>ALTO</span>
                <span>BUILDERS</span>
              </div>
            </div>
            <p className="text-sm mb-6">
              Premium accessory dwelling units designed and built for the modern homeowner.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-alto-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-alto-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-alto-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-alto-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-alto-accent transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-alto-accent transition-colors">Projects</Link></li>
              <li><Link to="/design" className="hover:text-alto-accent transition-colors">Design</Link></li>
              <li><Link to="/plans" className="hover:text-alto-accent transition-colors">Plans & Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>328 S La Brea Ave<br />Los Angeles, CA 90038</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:8188077587" className="hover:text-alto-accent transition-colors">818-807-7587</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@altobuilds.com" className="hover:text-alto-accent transition-colors">info@altobuilds.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
            <p className="text-sm mb-4">Stay updated with our latest news and offers.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-alto-accent"
              />
              <button type="submit" className="w-full bg-alto-accent hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Alto Builders. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/70">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
