import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Design from "./pages/Design";
import Plans from "./pages/Plans";
import PlanDetail from "./pages/PlanDetail";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import FAQ from "./pages/FAQ";
import AduConstruction from "./pages/services/AduConstruction";
import Remodeling from "./pages/services/Remodeling";
import BathroomRemodeling from "./pages/services/BathroomRemodeling";
import KitchenProjectWestLA from "./pages/projects/KitchenProjectWestLA";
import KitchenProjectAgourahills from "./pages/projects/KitchenProjectAgourahills";
import KitchenProjectPasadena from "./pages/projects/KitchenProjectPasadena";
import BathroomProjectDetail from "./pages/projects/BathroomProjectDetail";
import { useState } from "react";
import Adu from "./pages/Adu";

// AnimatedRoutes component for handling page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        {/* Remove direct ADU/Design/FAQ routes, use merge page */}
        {/* <Route path="/services/adu" element={<AduConstruction />} /> */}
        {/* <Route path="/design" element={<Design />} /> */}
        {/* <Route path="/faq" element={<FAQ />} /> */}
        <Route path="/adu" element={<Adu />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="/services/remodeling" element={<Remodeling />} />
        <Route path="/services/bathroom" element={<BathroomRemodeling />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/kitchen-west-la" element={<KitchenProjectWestLA />} />
        <Route path="/projects/kitchen-agoura-hills" element={<KitchenProjectAgourahills />} />
        <Route path="/projects/kitchen-pasadena" element={<KitchenProjectPasadena />} />
        <Route path="/projects/bathroom/:projectId" element={<BathroomProjectDetail />} />
        <Route path="/design" element={<Design />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/plans/:planId" element={<PlanDetail />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:location" element={<LocationDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  // Moving the QueryClient inside the component function to follow React's rules of hooks
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <AnimatedRoutes />
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
