
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-40 pb-20 flex items-center justify-center bg-alto-light-gray">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold text-alto-blue mb-4">404</h1>
          <p className="text-2xl text-alto-dark-gray mb-8">Oops! Page not found</p>
          <p className="text-alto-dark-gray mb-8">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
