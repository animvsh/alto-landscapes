
import Logo from "./Logo";
import Navbar from "./Navbar";

const HomeHeader = () => (
  <header className="w-full flex flex-col items-center pt-8 pb-4 bg-white z-40">
    <div className="w-full flex flex-col items-center">
      <Logo className="mb-4 h-16 md:h-20" />
      <div className="w-full flex justify-center">
        {/* Only Desktop Nav from Navbar */}
        <nav className="w-full flex flex-col items-center">
          <Navbar />
        </nav>
      </div>
    </div>
  </header>
);

export default HomeHeader;
