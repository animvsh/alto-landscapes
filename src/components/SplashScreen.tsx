
import { useEffect } from "react";
import Logo from "./Logo";

interface SplashScreenProps {
  visible: boolean;
}

const SplashScreen = ({ visible }: SplashScreenProps) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-alto-blue/95 transition-all duration-500">
      <div className="flex flex-col items-center animate-fadeInUp">
        <Logo className="h-28 animate-float mb-6" />
        <div className="text-3xl font-semibold text-white tracking-wide animate-pulse">ALTO BUILDERS</div>
        <div className="mt-4">
          <div className="w-16 h-1 bg-[#8E9196] rounded-full animate-shine" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
