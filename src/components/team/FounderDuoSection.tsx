
import { motion } from "framer-motion";

const FounderDuoSection = () => {
  return (
    <div className="mb-20">
      <motion.div 
        className="bg-white p-8 rounded-lg card-shadow mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-alto-blue mb-3">A father son duo unlike any other</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="/lovable-uploads/863b5369-c588-422e-9459-9a532d57fbbd.png" 
              alt="Paul and Simon Manfredi" 
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
          </div>
          <div>
            <p className="text-alto-dark-gray mb-6">
              Alto Builders is more than just a business—it's a family team. Combining a father's years of building expertise with his son's modern innovations, they seamlessly blend traditional craftsmanship with contemporary design. Together, they deliver top-notch quality and fresh ideas, setting them apart in the industry. This unique father-son partnership brings heart and dedication to every project, creating something truly special that reflects their combined experience and passion for construction.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FounderDuoSection;
