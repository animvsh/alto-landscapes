
import ProcessStep from '../ProcessStep';
import { ClipboardCheck, Ruler, FileText, HardHat } from 'lucide-react';

interface ProcessSectionProps {
  className?: string;
}

const ProcessSection = ({ className }: ProcessSectionProps) => {
  return (
    <section className={`py-20 bg-alto-light-gray ${className || ''}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle mx-auto">
            A streamlined approach to bringing your building vision to life
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ProcessStep 
            number="1" 
            title="Discovery & Consultation" 
            description="We begin with an in-depth consultation to understand your goals, budget, and timeline. Our team conducts a site assessment to evaluate your property's potential for a building project."
            icon={<ClipboardCheck size={18} />}
          />
          
          <ProcessStep 
            number="2" 
            title="Design Development" 
            description="Our architects create custom designs based on your input and property specifics. We present detailed plans and 3D renderings for your approval before finalizing."
            icon={<Ruler size={18} />}
          />
          
          <ProcessStep 
            number="3" 
            title="Permitting & Approvals" 
            description="We handle the entire permitting process, navigating local regulations and securing all necessary approvals. Our expertise ensures a smooth and efficient experience."
            icon={<FileText size={18} />}
          />
          
          <ProcessStep 
            number="4" 
            title="Construction" 
            description="Our skilled construction team brings your design to life with quality craftsmanship and attention to detail. We provide regular updates and maintain open communication throughout."
            icon={<HardHat size={18} />}
          />
          
          <ProcessStep 
            number="5" 
            title="Final Inspection & Handover" 
            description="After completion, we conduct thorough quality inspections before final walkthrough with you. We provide complete documentation and warranty information for your new building project."
            icon={<ClipboardCheck size={18} />}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
