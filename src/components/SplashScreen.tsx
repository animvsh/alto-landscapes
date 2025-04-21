
import React from "react";
import Logo from "./Logo";
import { LoaderCircle } from "lucide-react";

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#1a355e] via-[#8E9196] to-[#000000]">
      <div className="animate-fadeInUp flex flex-col items-center">
        <div className="mb-6">
          <Logo className="h-16 md:h-24 drop-shadow-xl" />
        </div>
        <LoaderCircle className="text-white animate-spin" size={42} strokeWidth={2.5} />
        <span className="mt-4 text-white/80 font-medium tracking-wide text-lg">Loading</span>
      </div>
    </div>
  );
};

export default SplashScreen;
