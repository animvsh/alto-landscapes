
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-alto-blue shadow-md py-3' : 'bg-alto-blue/80 backdrop-blur-md py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-white flex items-center">
            <div className="flex items-center">
              <span className="text-3xl font-bold">A</span>
              <span className="text-3xl font-light mx-0.5">|</span>
              <span className="text-3xl font-bold">B</span>
            </div>
            <div className="flex flex-col text-xs uppercase ml-2 leading-tight tracking-wide">
              <span className="font-medium">ALTO</span>
              <span className="font-medium">BUILDERS</span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-8">
            <NavigationMenuItem>
              <Link to="/about" className="text-white hover:text-alto-accent uppercase text-sm font-medium tracking-wide">
                ABOUT
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-alto-accent focus:bg-transparent uppercase text-sm font-medium tracking-wide">
                SERVICES
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-alto-blue border border-white/10">
                <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                  <Link to="/services/adu" className="group flex p-3 hover:bg-white/10 rounded-md">
                    <div className="text-white">
                      <div className="font-medium">ADU Construction</div>
                      <p className="text-sm text-white/70">Specialized ADU building services</p>
                    </div>
                  </Link>
                  <Link to="/services/remodeling" className="group flex p-3 hover:bg-white/10 rounded-md">
                    <div className="text-white">
                      <div className="font-medium">Remodeling</div>
                      <p className="text-sm text-white/70">Transform your existing space</p>
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/projects" className="text-white hover:text-alto-accent uppercase text-sm font-medium tracking-wide">
                PROJECTS
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/design" className="text-white hover:text-alto-accent uppercase text-sm font-medium tracking-wide">
                DESIGN
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/plans" className="text-white hover:text-alto-accent uppercase text-sm font-medium tracking-wide">
                PLANS & PRICING
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/locations" className="text-white hover:text-alto-accent uppercase text-sm font-medium tracking-wide">
                LOCATIONS
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contact" className="text-white hover:text-alto-accent uppercase text-sm font-medium tracking-wide">
                CONTACT
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:block">
          <Link to="/contact" className="text-white hover:text-alto-accent font-medium">
            Inquire
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-alto-blue shadow-lg animate-fade-in">
          <div className="flex flex-col p-4">
            <Link to="/about" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>ABOUT</Link>
            <div className="py-3 border-b border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">SERVICES</span>
                <ChevronDown className="text-white h-4 w-4" />
              </div>
              <div className="mt-2 pl-4">
                <Link to="/services/adu" className="block py-2 text-white/90 hover:text-white" onClick={toggleMenu}>ADU Construction</Link>
                <Link to="/services/remodeling" className="block py-2 text-white/90 hover:text-white" onClick={toggleMenu}>Remodeling</Link>
              </div>
            </div>
            <Link to="/projects" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>PROJECTS</Link>
            <Link to="/design" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>DESIGN</Link>
            <Link to="/plans" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>PLANS & PRICING</Link>
            <Link to="/locations" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>LOCATIONS</Link>
            <Link to="/contact" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>CONTACT</Link>
            <Link to="/contact" className="btn-accent mt-4 text-center" onClick={toggleMenu}>
              Inquire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
