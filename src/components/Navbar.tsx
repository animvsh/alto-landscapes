
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold text-alto-blue flex items-center">
            <span className="mr-1">A|B</span>
            <div className="flex flex-col text-sm ml-2 leading-tight">
              <span>ALTO</span>
              <span>BUILDERS</span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link to="/services" className="nav-link">SERVICES</Link>
          <Link to="/projects" className="nav-link">PROJECTS</Link>
          <Link to="/design" className="nav-link">DESIGN</Link>
          <Link to="/plans" className="nav-link">PLANS & PRICING</Link>
          <Link to="/locations" className="nav-link">LOCATIONS</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary">
            Inquire
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-alto-blue"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col p-4">
            <Link to="/about" className="py-3 border-b border-alto-gray" onClick={toggleMenu}>ABOUT</Link>
            <Link to="/services" className="py-3 border-b border-alto-gray" onClick={toggleMenu}>SERVICES</Link>
            <Link to="/projects" className="py-3 border-b border-alto-gray" onClick={toggleMenu}>PROJECTS</Link>
            <Link to="/design" className="py-3 border-b border-alto-gray" onClick={toggleMenu}>DESIGN</Link>
            <Link to="/plans" className="py-3 border-b border-alto-gray" onClick={toggleMenu}>PLANS & PRICING</Link>
            <Link to="/locations" className="py-3 border-b border-alto-gray" onClick={toggleMenu}>LOCATIONS</Link>
            <Link to="/contact" className="py-3 border-b border-alto-gray" onClick={toggleMenu}>CONTACT</Link>
            <Link to="/contact" className="btn-primary mt-4 text-center" onClick={toggleMenu}>
              Inquire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
