import { Link } from 'react-router-dom';
import Logo from './Logo';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-alto-blue text-white pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="mb-6" />
            <p className="text-white/80 mb-4">
              Premium accessory dwelling units designed and built for the modern homeowner in Greater Los Angeles and Ventura County.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-alto-accent">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-alto-accent">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-alto-accent">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-alto-accent">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-alto-accent">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-alto-accent">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/80 hover:text-alto-accent">Projects</Link>
              </li>
              <li>
                <Link to="/design" className="text-white/80 hover:text-alto-accent">Design</Link>
              </li>
              <li>
                <Link to="/plans" className="text-white/80 hover:text-alto-accent">Plans & Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-alto-accent">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">ADU Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/adu-basics" className="text-white/80 hover:text-alto-accent">ADU Basics</Link>
              </li>
              <li>
                <Link to="/adu-costs" className="text-white/80 hover:text-alto-accent">ADU Costs</Link>
              </li>
              <li>
                <Link to="/city-regulations" className="text-white/80 hover:text-alto-accent">City Regulations</Link>
              </li>
              <li>
                <Link to="/process" className="text-white/80 hover:text-alto-accent">Our Process</Link>
              </li>
              <li>
                <Link to="/floor-plans" className="text-white/80 hover:text-alto-accent">Floor Plans</Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-alto-accent">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-alto-accent" /> 
                <span className="text-white/80">123 Builder St, Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-alto-accent" /> 
                <a href="tel:+13231234567" className="text-white/80 hover:text-alto-accent">(323) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-alto-accent" /> 
                <a href="mailto:info@altobuilders.com" className="text-white/80 hover:text-alto-accent">info@altobuilders.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Alto Builders. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-white/60 text-sm hover:text-alto-accent">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/60 text-sm hover:text-alto-accent">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-white/60 text-sm hover:text-alto-accent">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
