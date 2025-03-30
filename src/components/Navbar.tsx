
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
      ${isScrolled ? 'bg-alto-blue shadow-md py-3' : 'bg-alto-blue/80 backdrop-blur-md py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <Logo linkTo="/" className="mr-4 md:mr-8" />

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-4 lg:space-x-6">
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
              <Link to="/projects" className="text-white hover:text-alto-accent uppercase text-sm font-medium tracking-wide">
                PROJECTS
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-alto-accent focus:bg-transparent uppercase text-sm font-medium tracking-wide">
                MORE
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-alto-blue border border-white/10">
                <div className="p-4 w-[200px]">
                  <Link to="/design" className="group flex p-2 hover:bg-white/10 rounded-md text-white">
                    DESIGN
                  </Link>
                  <Link to="/plans" className="group flex p-2 hover:bg-white/10 rounded-md text-white">
                    PLANS & PRICING
                  </Link>
                  <Link to="/locations" className="group flex p-2 hover:bg-white/10 rounded-md text-white">
                    LOCATIONS
                  </Link>
                </div>
              </NavigationMenuContent>
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
              <div className="flex justify-between items-center cursor-pointer" onClick={() => {
                const servicesSubmenu = document.getElementById('services-submenu');
                servicesSubmenu?.classList.toggle('hidden');
              }}>
                <span className="text-white font-medium">SERVICES</span>
                <ChevronDown className="text-white h-4 w-4" />
              </div>
              <div id="services-submenu" className="mt-2 pl-4 hidden">
                <Link to="/services/adu" className="block py-2 text-white/90 hover:text-white" onClick={toggleMenu}>ADU Construction</Link>
                <Link to="/services/remodeling" className="block py-2 text-white/90 hover:text-white" onClick={toggleMenu}>Remodeling</Link>
              </div>
            </div>
            
            <Link to="/projects" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>PROJECTS</Link>
            
            <div className="py-3 border-b border-white/20">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => {
                const moreSubmenu = document.getElementById('more-submenu');
                moreSubmenu?.classList.toggle('hidden');
              }}>
                <span className="text-white font-medium">MORE</span>
                <ChevronDown className="text-white h-4 w-4" />
              </div>
              <div id="more-submenu" className="mt-2 pl-4 hidden">
                <Link to="/design" className="block py-2 text-white/90 hover:text-white" onClick={toggleMenu}>DESIGN</Link>
                <Link to="/plans" className="block py-2 text-white/90 hover:text-white" onClick={toggleMenu}>PLANS & PRICING</Link>
                <Link to="/locations" className="block py-2 text-white/90 hover:text-white" onClick={toggleMenu}>LOCATIONS</Link>
              </div>
            </div>
            
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
