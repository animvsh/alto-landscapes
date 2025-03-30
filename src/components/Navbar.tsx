
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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
      ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <Logo linkTo="/" className="mr-4 md:mr-8" />

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-6 lg:space-x-8">
            <NavigationMenuItem>
              <Link to="/about" className="text-white hover:text-alto-accent text-sm font-medium tracking-wider uppercase">
                ABOUT
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-alto-accent focus:bg-transparent text-sm font-medium tracking-wider uppercase">
                SERVICES
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black/90 backdrop-blur-md border border-white/10">
                <div className="p-4 w-[280px]">
                  <Link to="/services/adu" className="group flex p-3 hover:bg-white/10 rounded-md">
                    <div className="text-white">
                      <div className="font-medium">ADU Construction</div>
                      <p className="text-sm text-white/70">Specialized ADU building</p>
                    </div>
                  </Link>
                  <Link to="/services/remodeling" className="group flex p-3 hover:bg-white/10 rounded-md">
                    <div className="text-white">
                      <div className="font-medium">Remodeling</div>
                      <p className="text-sm text-white/70">Transform your space</p>
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/projects" className="text-white hover:text-alto-accent text-sm font-medium tracking-wider uppercase">
                PROJECTS
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/design" className="text-white hover:text-alto-accent text-sm font-medium tracking-wider uppercase">
                DESIGN
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/plans" className="text-white hover:text-alto-accent text-sm font-medium tracking-wider uppercase">
                PLANS & PRICING
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/locations" className="text-white hover:text-alto-accent text-sm font-medium tracking-wider uppercase">
                LOCATIONS
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contact" className="text-white hover:text-alto-accent text-sm font-medium tracking-wider uppercase">
                CONTACT
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:block">
          <Link to="/contact" className="text-white hover:text-alto-accent font-medium uppercase tracking-wider">
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md shadow-lg animate-fade-in border-t border-white/10">
          <div className="flex flex-col p-6">
            <Link to="/about" className="py-3 border-b border-white/20 text-white hover:text-alto-accent uppercase text-sm tracking-wider" onClick={toggleMenu}>ABOUT</Link>
            
            <div className="py-3 border-b border-white/20">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => {
                const servicesSubmenu = document.getElementById('services-submenu');
                servicesSubmenu?.classList.toggle('hidden');
              }}>
                <span className="text-white font-medium uppercase text-sm tracking-wider">SERVICES</span>
                <ChevronDown className="text-white h-4 w-4" />
              </div>
              <div id="services-submenu" className="mt-2 pl-4 hidden">
                <Link to="/services/adu" className="block py-2 text-white/90 hover:text-white" onClick={toggleMenu}>ADU Construction</Link>
                <Link to="/services/remodeling" className="block py-2 text-white/90 hover:text-white" onClick={toggleMenu}>Remodeling</Link>
              </div>
            </div>
            
            <Link to="/projects" className="py-3 border-b border-white/20 text-white hover:text-alto-accent uppercase text-sm tracking-wider" onClick={toggleMenu}>PROJECTS</Link>
            <Link to="/design" className="py-3 border-b border-white/20 text-white hover:text-alto-accent uppercase text-sm tracking-wider" onClick={toggleMenu}>DESIGN</Link>
            <Link to="/plans" className="py-3 border-b border-white/20 text-white hover:text-alto-accent uppercase text-sm tracking-wider" onClick={toggleMenu}>PLANS & PRICING</Link>
            <Link to="/locations" className="py-3 border-b border-white/20 text-white hover:text-alto-accent uppercase text-sm tracking-wider" onClick={toggleMenu}>LOCATIONS</Link>
            <Link to="/contact" className="py-3 border-b border-white/20 text-white hover:text-alto-accent uppercase text-sm tracking-wider" onClick={toggleMenu}>CONTACT</Link>
            
            <Link to="/contact" className="premium-button mt-6 text-center" onClick={toggleMenu}>
              INQUIRE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
