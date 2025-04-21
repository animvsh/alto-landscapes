
import Logo from "./Logo";
import Navbar from "./Navbar";

const HomeHeader = () => (
  <header className="w-full h-screen flex flex-col items-center pt-5 md:pt-8 pb-3 relative z-40 pointer-events-none">
    <div className="container-custom flex flex-col items-center pointer-events-auto">
      <div className="w-full flex justify-center" style={{ marginBottom: "6px" }}>
        <Logo className="mb-3 h-12 md:h-16" />
      </div>
      {/* Glass hero panel overlay for mobile */}
      <div className="w-full max-w-lg md:max-w-2xl mx-auto mt-6 glass-morphism shadow-xl px-4 py-6 md:py-8 rounded-2xl backdrop-blur-xl" style={{
        boxShadow: "0 10px 32px rgba(26,53,94,0.09), 0 1.5px 3px rgba(51,70,122,0.07)",
        borderRadius: "1.2rem"
      }}>
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-[#8E9196] luxury-gradient bg-clip-text text-transparent" style={{textShadow:'0 2px 8px #fff4'}}>
            Welcome to Alto Construction
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-4">Los Angeles Remodeling &amp; ADU Experts</p>
          <div className="flex justify-center mt-2">
            <a href="#services"
              className="btn-primary px-7 py-3 text-base md:text-lg shadow-lg focus:ring-2 focus:ring-[#8E9196]">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Navbar />
      </div>
    </div>
  </header>
);

export default HomeHeader;
