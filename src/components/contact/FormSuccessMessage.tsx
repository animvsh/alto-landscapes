
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface FormSuccessMessageProps {
  onReset: () => void;
}

const FormSuccessMessage = ({ onReset }: FormSuccessMessageProps) => {
  return (
    <div className="text-center py-8 space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      <h3 className="text-2xl font-semibold text-alto-blue">Thank You!</h3>
      <p className="text-lg text-alto-dark-gray mb-6">
        Your message has been received. We'll get back to you shortly.
      </p>
      <Button
        onClick={onReset}
        className="btn-primary"
      >
        Send Another Message
      </Button>
    </div>
  );
};

export default FormSuccessMessage;
