
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
      ${isScrolled ? 'bg-alto-blue shadow-md py-3' : 'bg-alto-blue/90 backdrop-blur-md py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold text-white flex items-center">
            <span className="mr-1">A|B</span>
            <div className="flex flex-col text-sm ml-2 leading-tight">
              <span>ALTO</span>
              <span>BUILDERS</span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 focus:bg-white/10">
                ADU INFO
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-alto-blue border border-white/10">
                <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                  <Link to="/adu-basics" className="group flex p-3 hover:bg-white/10 rounded-md">
                    <div className="text-white">
                      <div className="font-medium">ADU Basics</div>
                      <p className="text-sm text-white/70">Learn the fundamentals of building an ADU</p>
                    </div>
                  </Link>
                  <Link to="/adu-costs" className="group flex p-3 hover:bg-white/10 rounded-md">
                    <div className="text-white">
                      <div className="font-medium">ADU Costs</div>
                      <p className="text-sm text-white/70">Detailed breakdown of building costs</p>
                    </div>
                  </Link>
                  <Link to="/city-regulations" className="group flex p-3 hover:bg-white/10 rounded-md">
                    <div className="text-white">
                      <div className="font-medium">City Regulations</div>
                      <p className="text-sm text-white/70">City-specific rules and regulations</p>
                    </div>
                  </Link>
                  <Link to="/process" className="group flex p-3 hover:bg-white/10 rounded-md">
                    <div className="text-white">
                      <div className="font-medium">Our Process</div>
                      <p className="text-sm text-white/70">How we build your ADU from start to finish</p>
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/plans" className="text-white hover:text-alto-accent flex items-center p-2 rounded-md hover:bg-white/10">
                PLANS & PRICING
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/design" className="text-white hover:text-alto-accent flex items-center p-2 rounded-md hover:bg-white/10">
                DESIGN
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/projects" className="text-white hover:text-alto-accent flex items-center p-2 rounded-md hover:bg-white/10">
                PROJECTS
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/about" className="text-white hover:text-alto-accent flex items-center p-2 rounded-md hover:bg-white/10">
                ABOUT US
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/services" className="text-white hover:text-alto-accent flex items-center p-2 rounded-md hover:bg-white/10">
                OTHER SERVICES
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contact" className="text-white hover:text-alto-accent flex items-center p-2 rounded-md hover:bg-white/10">
                CONTACT US
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:block">
          <Link to="/client-login" className="mr-4 text-white hover:text-alto-accent">CLIENT LOGIN</Link>
          <Link to="/contact" className="btn-accent">
            Get Started
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
            <div className="py-3 border-b border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">ADU INFO</span>
                <ChevronDown className="text-white h-4 w-4" />
              </div>
              <div className="mt-2 pl-4">
                <Link to="/adu-basics" className="block py-2 text-white/90 hover:text-white" onClick={toggleMenu}>ADU Basics</Link>
                <Link to="/adu-costs" className="block py-2 text-white/90 hover:text-white" onClick={toggleMenu}>ADU Costs</Link>
                <Link to="/city-regulations" className="block py-2 text-white/90 hover:text-white" onClick={toggleMenu}>City Regulations</Link>
                <Link to="/process" className="block py-2 text-white/90 hover:text-white" onClick={toggleMenu}>Our Process</Link>
              </div>
            </div>
            <Link to="/plans" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>PLANS & PRICING</Link>
            <Link to="/design" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>DESIGN</Link>
            <Link to="/projects" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>PROJECTS</Link>
            <Link to="/about" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>ABOUT US</Link>
            <Link to="/services" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>OTHER SERVICES</Link>
            <Link to="/contact" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>CONTACT US</Link>
            <Link to="/client-login" className="py-3 border-b border-white/20 text-white hover:text-alto-accent" onClick={toggleMenu}>CLIENT LOGIN</Link>
            <Link to="/contact" className="btn-accent mt-4 text-center" onClick={toggleMenu}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
