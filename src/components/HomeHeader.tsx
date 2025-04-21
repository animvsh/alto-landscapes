
import Logo from "./Logo";
import Navbar from "./Navbar";

const HomeHeader = () => (
  <header className="w-full h-screen flex flex-col items-center pt-8 pb-4 relative z-40 pointer-events-none">
    <div className="container-custom flex flex-col items-center pointer-events-auto">
      <Logo className="mb-4 h-16 md:h-20" />
      <div className="w-full flex justify-center">
        <Navbar />
      </div>
    </div>
  </header>
);

export default HomeHeader;
