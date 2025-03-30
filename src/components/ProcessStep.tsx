
import { ReactNode } from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
  return (
    <div className="flex">
      <div className="mr-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-alto-accent text-white font-bold text-xl">
          {number}
        </div>
        <div className="h-full w-px bg-alto-accent mx-auto mt-2 mb-2 opacity-50 hidden md:block"></div>
      </div>
      <div>
        <div className="flex items-center mb-2">
          {icon && <span className="mr-2 text-alto-blue">{icon}</span>}
          <h3 className="text-xl font-semibold text-alto-blue">{title}</h3>
        </div>
        <p className="text-alto-dark-gray mb-8">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
